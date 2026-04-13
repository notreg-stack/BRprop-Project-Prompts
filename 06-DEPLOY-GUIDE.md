# PROMPT FINAL: Deploy Completo do BRprop

## Visão Geral

Este documento contém TODOS os passos para colocar o site BRprop no ar, do zero ao produção.

---

## FASES DO DEPLOY

```
Fase 1: Setup do Projeto    → Criar estrutura de arquivos
Fase 2: Alibaba Cloud       → Criar servidor
Fase 3: Configurar Server   → Nginx, SSL, Firewall
Fase 4: Deploy Backend      → Node.js API
Fase 5: Deploy Frontend      → Site estático
Fase 6: Configurar DNS       → Apontar domínio
Fase 7: Testes               → Verificar tudo funciona
```

---

## FASE 1: SETUP DO PROJETO

### 1.1 No seu Mac, criar estrutura

```bash
# Criar pasta do projeto
mkdir -p ~/projects/brprop
cd ~/projects/brprop

# Criar estrutura de diretórios
mkdir -p src/{styles,scripts,assets/{images,icons,qr-codes}}
mkdir -p server/{routes,services,middleware,utils}
mkdir -p config ssl scripts

# Criar arquivos (use os prompts anteriores)
# - 04-WEBSITE-CODIGO.md → src/index.html, src/*.html, src/styles/*.css, src/scripts/*.js
# - 05-BACKEND-SERVER.md → server/*.js
```

### 1.2 Instalar dependências do frontend (se usar bundler)

```bash
cd ~/projects/brprop

# Se usar um bundler como Vite:
npm init -y
npm install vite --save-dev

# Ou se for site estático puro, não precisa
```

### 1.3 Build do frontend (se usar bundler)

```bash
# Se usar Vite ou similar
npm run build
# Gera output em dist/

# Se for site estático puro
# Copie src/ para dist/
cp -r src dist/
```

---

## FASE 2: ALIBABA CLOUD ECS

### 2.1 Criar Conta

1. Acesse: https://www.alibabacloud.com/
2. Register com email e senha
3. Complete verificação de identidade

### 2.2 Criar ECS Instance

```yaml
Região: Hong Kong (importante para China)
Instance Type: ecs.s6-c1m2.small
OS: Ubuntu 22.04 LTS
Bandwidth: 5 Mbps
Storage: 40GB SSD
```

### 2.3 Configurar Security Group

**Inbound Rules:**
```
SSH (22) → Seu IP
HTTP (80) → 0.0.0.0/0
HTTPS (443) → 0.0.0.0/0
Custom TCP (3000) → 127.0.0.1 (para backend)
```

### 2.4 Conectar ao Servidor

```bash
# Obter IP do servidor no dashboard Alibaba Cloud
ssh root@SEU_IP_AQUI

# Primeira execução:
apt update && apt upgrade -y
```

---

## FASE 3: CONFIGURAR SERVIDOR

### 3.1 Instalar Dependências

```bash
# No servidor (ssh root@SEU_IP)

# Nginx
apt install -y nginx

# Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Certbot (SSL)
apt install -y certbot python3-certbot-nginx

# Git (para clonar repo)
apt install -y git

# UFW Firewall
apt install -y ufw
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 3.2 Criar Usuário

```bash
adduser murillo
usermod -aG sudo murillo
mkdir -p /home/murillo/.ssh
chmod 700 /home/murillo/.ssh

# Adicionar sua chave SSH pública
nano /home/murillo/.ssh/authorized_keys

# Mudar ownership
chown -R murillo:murillo /home/murillo
```

### 3.3 Configurar Nginx

```bash
# No servidor, como root:

nano /etc/nginx/sites-available/brprop
```

**Copie este conteúdo:**

```nginx
server {
    listen 80;
    server_name SEU_DOMINIO.COM www.SEU_DOMINIO.COM;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name SEU_DOMINIO.COM www.SEU_DOMINIO.COM;
    
    # SSL will be configured by certbot
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    gzip_min_length 1000;
    
    # Frontend static files
    root /var/www/brprop/dist;
    index index.html;
    
    # API proxy
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Ativar site:**

```bash
ln -s /etc/nginx/sites-available/brprop /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 3.4 SSL Certificate

```bash
# still as root on server:
certbot --nginx -d SEU_DOMINIO.COM -d www.SEU_DOMINIO.COM

# Follow prompts:
# - Enter email
# - Agree TOS (A)
# - Share email (N)
# - Redirect (2 = redirect HTTP to HTTPS)
```

**Testar renovação:**
```bash
certbot renew --dry-run
```

### 3.5 Criar diretório do app

```bash
mkdir -p /var/www/brprop
chown -R murillo:murillo /var/www/brprop
```

---

## FASE 4: DEPLOY BACKEND

### 4.1 No Servidor - Setup Backend

```bash
# Como murillo:
cd /var/www/brprop

# Clone seu repo (ou crie manualmente)
git clone https://github.com/SEU_USER/brprop.git .

# Criar .env
cp .env.example .env
nano .env
```

**Configure .env:**
```bash
NODE_ENV=production
PORT=3000
EMAIL_SERVICE=sendgrid
EMAIL_USER=apikey
EMAIL_API_KEY=SG.SUA_CHAVE_AQUI
EMAIL_FROM=noreply@SEU_DOMINIO.COM
EMAIL_TO=seu-email@SEU_DOMINIO.COM
LOG_LEVEL=info
```

### 4.2 Instalar Dependências e Iniciar

```bash
# No diretório server/
cd server
npm install

# Testar
npm start

# Se funcionar, pare com Ctrl+C
# Configure PM2 para produção
npm install -g pm2
pm2 start index.js --name brprop-api

# Auto-start PM2
pm2 startup
pm2 save
```

**Verificar API:**
```bash
curl http://localhost:3000/health
# Deve retornar: {"status":"ok",...}
```

---

## FASE 5: DEPLOY FRONTEND

### 5.1 Build local (ou direto no servidor)

```bash
# Se usar bundler:
npm run build

# Isso gera pasta dist/
```

### 5.2 Copiar para servidor

```bash
# Opção A: rsync (recomendado)
rsync -avz --delete dist/ murillo@SEU_IP:/var/www/brprop/dist/

# Opção B: git push + pull no servidor
# Push para GitHub, luego no servidor:
git pull origin main

# Opção C: SCP
scp -r dist/* murillo@SEU_IP:/var/www/brprop/dist/
```

### 5.3 Permissões

```bash
# No servidor:
chown -R www-data:www-data /var/www/brprop/dist
chmod -R 755 /var/www/brprop/dist
```

---

## FASE 6: DNS

### 6.1 Configurar DNS

**No seu registrador de domínio (GoDaddy, Namecheap, etc):**

```
Tipo: A
Nome: @
Valor: SEU_IP_DO_SERVIDOR
TTL: 3600 (1 hora)

Tipo: A
Nome: www
Valor: SEU_IP_DO_SERVIDOR
TTL: 3600

Tipo: CNAME
Nome: api (opcional)
Valor: SEU_DOMINIO.COM
```

### 6.2 Propagation

```bash
# Verificar se DNS propagou
dig SEU_DOMINIO.COM
# ou
nslookup SEU_DOMINIO.COM
```

Aguarde 5 min a 48 horas para propagação completa.

---

## FASE 7: TESTES

### 7.1 Testar Site

```bash
# Abra no navegador:
https://SEU_DOMINIO.COM

# Deve carregar a homepage em chinês
```

### 7.2 Testar Formulário

```bash
# Teste via curl:
curl -X POST https://SEU_DOMINIO.COM/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试用户",
    "email": "test@example.com",
    "interest": "land_purchase",
    "area": "5000",
    "crop": "soybean",
    "message": "我对这块土地很感兴趣，请联系我。"
  }'
```

**Deve retornar:**
```json
{"success":true,"message":"咨询已发送成功！"}
```

### 7.3 Verificar Email

- Checar se email de notificação chegou
- Checar se auto-resposta foi enviada

### 7.4 Mobile Test

```bash
# Usando Developer Tools:
# Ctrl+Shift+M (toggle device toolbar)
# Testar em iPhone, Android
```

---

## SCRIPTS DE AUTOMATIZAÇÃO

### deploy.sh (no seu Mac)

```bash
#!/bin/bash
set -e

SERVER="SEU_IP"
USER="murillo"
DOMAIN="SEU_DOMINIO.COM"
DIR="/var/www/brprop"

echo "📦 Building..."
npm run build

echo "📤 Uploading to server..."
rsync -avz --delete dist/ $USER@$SERVER:$DIR/dist/

echo "🔄 Restarting backend..."
ssh $USER@$SERVER "cd $DIR/server && pm2 restart brprop-api"

echo "✅ Deploy complete!"
echo "https://$DOMAIN"
```

---

## TROUBLESHOOTING

### Site não carrega
```bash
# No servidor:
systemctl status nginx
tail -f /var/log/nginx/error.log
```

### API não funciona
```bash
# No servidor:
pm2 logs brprop-api
curl http://localhost:3000/health
```

### SSL inválido
```bash
# Regenerar certificado:
certbot delete --cert-name SEU_DOMINIO.COM
certbot --nginx -d SEU_DOMINIO.COM -d www.SEU_DOMINIO.COM
```

### Permissão negada
```bash
# Corrigir ownership:
chown -R www-data:www-data /var/www/brprop/dist
chmod -R 755 /var/www/brprop
```

---

## CUSTOS MENSAIS ESTIMADOS

| Serviço | Provedor | Preço |
|---------|----------|-------|
| ECS Server | Alibaba Cloud | ~$25-30 USD |
| Domínio | Namecheap | ~$10-15 USD/ano |
| SSL | Let's Encrypt | Gratuito |
| Email | SendGrid (free tier) | Gratuito |
| **Total** | | **~$30 USD/mês** |

---

## CHECKLIST FINAL

- [ ] Site carrega em https://SEU_DOMINIO.COM
- [ ] Homepage em chinês
- [ ] Toggle de idioma funciona
- [ ] Formulário envia com sucesso
- [ ] Email de notificação recebido
- [ ] Auto-resposta enviada
- [ ] Mobile responsivo
- [ ] QR Code WeChat visível
- [ ] SSL válido (verde no navegador)
- [ ] Backend respondendo em /api/health

---

## COMANDOS ÚTEIS DO SERVIDOR

```bash
# Status Nginx
sudo systemctl status nginx

# Reiniciar Nginx
sudo systemctl restart nginx

# Logs Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Status PM2 (Backend)
pm2 status
pm2 logs brprop-api

# Reiniciar Backend
pm2 restart brprop-api

# Ver uso de recursos
htop
df -h
free -h
```

---

## PRÓXIMOS PASSOS PÓS-LAUNCH

1. **Monitoramento**: Configure uptime monitoring (UptimeRobot gratuito)
2. **Backup**: Automatize backups do servidor
3. **Analytics**: Adicione Google Analytics ou Plausible
4. **WeChat**: Complete setup da Official Account
5. **Conteúdo**: Adicione mais propriedades reais
6. **SEO**: Configure sitemap.xml, robots.txt
7. **CDN China**: Configure Alibaba Cloud CDN para China
