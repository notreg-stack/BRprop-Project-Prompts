#!/usr/bin/env bash
set -euo pipefail

SERVER="${BRPROP_SERVER:?Defina BRPROP_SERVER}"
DEPLOY_PATH="${BRPROP_DEPLOY_PATH:-/var/www/brprop}"
REMOTE_USER="${BRPROP_REMOTE_USER:-murillo}"

echo "==> Validando projeto"
npm run verify

echo "==> Instalando dependências locais, se necessário"
npm install

echo "==> Enviando arquivos"
rsync -avz --delete \
  --exclude node_modules \
  --exclude .env \
  ./ "${REMOTE_USER}@${SERVER}:${DEPLOY_PATH}/"

echo "==> Build e restart remoto"
ssh "${REMOTE_USER}@${SERVER}" "cd ${DEPLOY_PATH} && npm install --omit=dev && npm run build && pm2 reload config/pm2.ecosystem.cjs --update-env"

echo "Deploy finalizado."
