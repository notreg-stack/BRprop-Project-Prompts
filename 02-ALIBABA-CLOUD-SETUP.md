# PROMPT: Configurar Alibaba Cloud ECS

## Objetivo
Criar um servidor na Alibaba Cloud para hospedar o site BRprop.

## Passos

### 1. Criar Conta Alibaba Cloud
```
1. Acesse: https://www.alibabacloud.com/
2. Clique em "Sign Up" / "注册"
3. Complete o cadastro (aceita cartão internacional)
4. Complete a verificação de identidade
```

### 2. Criar ECS Instance (Hong Kong)

**Configurações recomendadas:**
```
- Product: Elastic Compute Service (ECS)
- Region: Hong Kong (apoiado para China sem ICP)
- Zone: random (qualquer uma)
- Instance Type: ecs.s6-c1m2.small (1 vCPU, 2GB RAM)
  - Ou: ecs.n4.small (2 vCPU, 4GB) para mais performance
- Operating System: Ubuntu 22.04 LTS (64-bit)
- Storage: 40GB SSD (mínimo)
- Bandwidth: 5 Mbps (para China)
- Security Group: Permite HTTP (80), HTTPS (443), SSH (22)
```

### 3. Configurar Security Group (Firewall)

**Inbound Rules:**
```
Type: Custom TCP
Port: 22 (SSH)
Source: Seu IP

Type: HTTP
Port: 80
Source: 0.0.0.0/0

Type: HTTPS
Port: 443
Source: 0.0.0.0/0

Type: Custom TCP
Port: 3000 (Node app)
Source: 127.0.0.1 (só acesso local via Nginx)
```

### 4. Conectar via SSH

```bash
# Após criar a instância, você receberá:
ssh root@SEU_IP_DO_SERVIDOR

# Primeira coisa a fazer:
apt update && apt upgrade -y

# Instalar ferramentas básicas:
apt install -y curl wget git unzip nginx certbot python3-certbot-nginx
```

### 5. Criar Usuário (não usar root)

```bash
# Criar usuário
adduser murillo
usermod -aG sudo murillo

# Copiar SSH key
mkdir -p /home/murillo/.ssh
chmod 700 /home/murillo/.ssh
# Cole sua chave pública em authorized_keys

# Testar login
ssh murillo@SEU_IP_DO_SERVIDOR
```

### 6. Configurar Firewall (UFW)

```bash
# Se usar UFW:
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 7. Instalar Node.js 18

```bash
# Via NodeSource (recomendado):
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar:
node --version  # v18.x.x
npm --version   # 9.x.x
```

### 8. Instalar Docker (opcional mas recomendado)

```bash
# Instalar Docker:
curl -fsSL https://get.docker.com | sh

# Adicionar usuário ao grupo docker:
sudo usermod -aG docker murillo

# Habilitar e iniciar:
sudo systemctl enable docker
sudo systemctl start docker

# Instalar Docker Compose:
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 9. Configurar Nginx

```bash
# Copiar configuração:
sudo cp /caminho/brprop/config/nginx.conf /etc/nginx/sites-available/brprop

# Habilitar site:
sudo ln -s /etc/nginx/sites-available/brprop /etc/nginx/sites-enabled/

# Testar configuração:
sudo nginx -t

# Reiniciar:
sudo systemctl restart nginx
```

### 10. Configurar SSL (Let's Encrypt)

```bash
# Gerar certificado:
sudo certbot --nginx -d brprop.com -d www.brprop.com

# OU para testar primeiro (staging):
sudo certbot --nginx --staging -d brprop.com -d www.brprop.com

# Responder às perguntas:
# - Email: seu@email.com
# - Agree TOS: yes
# - Share email: no
# - Redirect: 2 (redirect HTTP to HTTPS)
```

### 11. Renovação Automática do SSL

```bash
# Testar renovação:
sudo certbot renew --dry-run

# O Certbot já configura cronjob automático, mas verifique:
sudo systemctl status certbot.timer
```

### 12. Script de Setup Completo

```bash
#!/bin/bash
set -e

echo "Setup Alibaba Cloud ECS para BRprop"

# Update
apt update && apt upgrade -y

# Install tools
apt install -y curl wget git unzip nginx certbot python3-certbot-nginx

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Docker
curl -fsSL https://get.docker.com | sh
usermod -aG docker $USER

# Create app directory
mkdir -p /var/www/brprop
chown -R $USER:$USER /var/www/brprop

echo "Setup concluído!"
echo "Próximo passo: clonar repositório e configurar domínio"
```

---

## Outputs Esperados

Ao final deste prompt, você deve ter:
1. ✅ Servidor ECS rodando na Alibaba Cloud (Hong Kong)
2. ✅ SSH acesso configurado
3. ✅ Nginx instalado e configurado
4. ✅ SSL certificate instalado
5. ✅ Node.js 18 instalado
6. ✅ Docker instalado (opcional)

## Comandos Úteis

```bash
# Ver status do servidor
sudo systemctl status nginx

# Ver logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Reiniciar serviços
sudo systemctl restart nginx
sudo systemctl restart docker

# Ver IP público
curl ifconfig.me
```

---

## Troubleshooting

### Problema: Não consigo conectar via SSH
```
- Verificar Security Group (porta 22 liberada?)
- Verificar IP permitir acesso SSH
- Tentar com senha primeiro se chave não funcionar
```

### Problema: SSL não funciona
```
- Verificar se porta 443 está liberada no Security Group
- Verificar se DNS está apontando para o servidor
- sudo certbot --nginx -d brprop.com -d www.brprop.com
```

### Problema: Nginx não inicia
```
- sudo nginx -t  (verificar erros de configuração)
- Verificar logs: /var/log/nginx/error.log
- Verificar se porta 80 não está em uso
```
