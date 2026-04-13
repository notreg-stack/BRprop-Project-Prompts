# WeChat Playbook - BRprop

## Objetivo

Substituir o placeholder atual por um canal real de contato para compradores chineses.

## O que já está pronto no projeto

- placeholder de QR em `src/assets/qr-codes/wechat-placeholder.svg`
- campo de WeChat nos formulários
- referências de contato no site
- backend preparado para incluir o identificador de WeChat nos emails automáticos

## O que ainda é manual

1. criar ou regularizar a conta oficial
2. obter o QR oficial
3. decidir o ID final de atendimento
4. substituir o arquivo placeholder pelo QR real
5. atualizar `.env` com `WECHAT_ID`

## Caminho recomendado

### Opção preferida

Use uma conta oficial WeChat vinculada a uma operação que consiga receber e responder leads com consistência.

### Se ainda não houver conta oficial

Use inicialmente:

- um ID de WeChat operacional da equipe
- um QR estático
- resposta humana assistida por tradução

## Substituição do QR

1. Exporte o QR oficial em PNG ou SVG.
2. Salve com o nome `wechat-placeholder.svg` apenas se quiser substituir sem mexer no código.
3. Alternativamente, atualize `WECHAT_QR_PATH` no `.env`.
4. Rode novo deploy.

## Copy sugerido para resposta inicial

### Chinês simplificado

感谢您的联系。  
我们已收到您的需求，将在 24-48 小时内回复。  
如方便，请发送以下信息：目标州、面积、作物、购买时间窗口。  

### Português interno

Obrigado pelo contato.  
Recebemos sua solicitação e responderemos em 24-48 horas.  
Se possível, envie estado-alvo, faixa de área, cultura e horizonte de compra.  

## Fallback sem WeChat

Se a conta ainda não estiver operacional, mantenha:

- formulário ativo
- email ativo
- copy honesta informando que o atendimento principal está em implantação
