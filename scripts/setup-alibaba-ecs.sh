#!/usr/bin/env bash
set -euo pipefail

echo "==> Updating Ubuntu packages"
sudo apt-get update
sudo apt-get upgrade -y

echo "==> Installing base dependencies"
sudo apt-get install -y ca-certificates curl git nginx rsync unzip

echo "==> Installing Node.js 20"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> Installing PM2"
sudo npm install -g pm2

echo "==> Installing Docker"
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker "${SUDO_USER:-$USER}"

echo "==> Preparing application directory"
sudo mkdir -p /var/www/brprop
sudo chown -R "${SUDO_USER:-$USER}":"${SUDO_USER:-$USER}" /var/www/brprop

echo "Setup concluído. Próximos passos:"
echo "1. copiar o projeto para /var/www/brprop"
echo "2. rodar npm install && npm run build"
echo "3. ajustar config/nginx.conf com o domínio final"
echo "4. habilitar PM2 e SSL"
