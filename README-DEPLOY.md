# Deploy Guide - BRprop

## 1. Premissas

- Projeto estático + API Node/Express
- Público principal na China continental
- Hospedagem sugerida: Alibaba Cloud ECS em Hong Kong
- Sem dependência crítica de Google Fonts, Google Maps ou scripts externos bloqueáveis

## 2. Provisionar a VM

1. Crie uma ECS em Hong Kong com Ubuntu 22.04.
2. Libere `80` e `443` no security group.
3. Restrinja `22` ao seu IP administrativo.
4. Entre por SSH e rode:

```bash
bash /var/www/brprop/scripts/setup-alibaba-ecs.sh
```

## 3. Subir o projeto

No seu Mac, com as variáveis do deploy preenchidas:

```bash
export BRPROP_SERVER=SEU_IP_PUBLICO
export BRPROP_REMOTE_USER=murillo
export BRPROP_DEPLOY_PATH=/var/www/brprop
./scripts/deploy-remote.sh
```

## 4. Configurar variáveis

Copie `.env.example` para `.env` no servidor e preencha:

- `PUBLIC_SITE_URL`
- `ALLOWED_ORIGIN`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `EMAIL_FROM`
- `EMAIL_TO`
- `WECHAT_ID`

Se você ainda não tiver SMTP pronto, use `EMAIL_PROVIDER=mock` temporariamente para validar a API sem envio real.

## 5. Habilitar Nginx

1. Copie `config/nginx.conf` para `/etc/nginx/sites-available/brprop`.
2. Ajuste `server_name` para o domínio final.
3. Crie o link simbólico em `sites-enabled`.
4. Rode `sudo nginx -t`.
5. Reinicie o serviço com `sudo systemctl restart nginx`.

## 6. SSL

Com o domínio já apontando para o servidor:

```bash
sudo certbot --nginx -d brprop.shop -d www.brprop.shop
```

## 7. PM2

Dentro de `/var/www/brprop`:

```bash
pm2 start config/pm2.ecosystem.cjs
pm2 save
pm2 startup
```

## 8. Verificação recomendada

- A homepage abre pelo domínio final
- `https://seu-dominio.com/health` responde `ok`
- formulário envia com sucesso
- email chega ao broker
- auto reply é disparado
- QR do WeChat já foi substituído pelo oficial

## 9. Observações para China

- não injete analytics ou fontes externas antes de testar a rota na China
- sirva imagens localmente
- se for usar CDN, valide se a configuração não depende de ICP para o tipo de aceleração desejado
- evite assets pesados na hero inicial
