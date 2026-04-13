# PROMPT: Configurar WeChat para BRprop

## Objetivo
Criar um sistema de contato via WeChat para compradores chineses sem precisar falar mandarim.

## Opções de WeChat

### Opção 1: WeChat Official Account (Grátis) - RECOMENDADO
Melhor para empresas. Permite mensagens automáticas e QR code para o site.

### Opção 2: WeChat Work (Pago ~$60/ano)
Para equipes maiores, mais funcionalidades.

### Opção 3: WeChat Personal + QR Code Estático
Mais simples, mas limitações de automação.

---

## PASSO A PASSO: WeChat Official Account

### 1. Registrar Conta

```
1. Acesse: https://mp.weixin.qq.com/
2. Clique "立即注册" (Registrar agora)
3. Escolha "订阅号" (Subscription Account) - GRÁTIS
4. Complete informações:
   - País/Região: China (优先注册)
   - Email: use um email que você accessa
   - Senha: anote!
5. Verificação por SMS no celular chino (você precisará de um número chino)
   - Alternativa: peça ajuda de um amigo na China ou use serviço de SMS
```

### 2. Se Você Não Tem Número Chinês

**Opção A:** Peça a um amigo na China
- Peça para ele verificar com o celular dele
- Depois você muda o admin para seu email

**Opção B:** Serviços de SMS Chinês
- Pesquisar "虚拟手机号 中国" online
- Alguns serviços pagos oferecem números temporários

**Opção C:** Contratar no Fiverr/Upwork
- Procure "WeChat account verification China"
- Custo: ~$5-20

### 3. Configurar Conta

Após registro, faça login em: https://mp.weixin.qq.com/

**Configurações Básicas:**
```
1. Account Info (账号信息):
   - Name (名称): BRprop巴西农业
   - ID (ID): brprop_com (escolha um único)
   - Bio: 巴西农村地产专家，为您连接优质农业用地

2. QR Code (二维码):
   - Download o QR code oficial
   - Coloque no site como "scan para联系我们"

3. Auto Reply (自动回复):
   - Configure mensagem de boas-vindas
```

### 4. Configurar Mensagem Automática

```
1. No dashboard, vá em: 设置与开发 (Settings & Development)
   → 自动回复 (Auto Reply)

2. Configure:
   - Enable auto reply: 是
   - Mensagem de boas-vindas:
   
"感谢您关注BRprop！

我们专门帮助中国投资者购买巴西农业用地。
您的咨询已收到，我们将在24-48小时内与您联系。

如需紧急联系:
📧 Email: [seu-email]
💬 微信: [seu-wechat-id]

祝好！
BRprop团队"
```

### 5. Configurar Menu Personalizado

```
1. Vá em: 设置与开发 → 自定义菜单 (Custom Menu)

2. Crie menu:
   Menu 1: 关于我们
   - 子菜单: 公司简介 → link para /about.html
   - 子菜单: 团队成员 → link para /about.html#team
   
   Menu 2: 土地项目
   - 子菜单: 最新项目 → link para /properties.html
   - 子菜单: 搜索土地 → link para /properties.html#search
   
   Menu 3: 联系我们
   - 子菜单: 在线咨询 → link para /contact.html
   - 子菜单: 添加微信 → mostra QR code
```

### 6. Obter QR Code para o Site

```html
<!-- No site, adicione: -->
<div class="wechat-section">
  <h3>扫描二维码联系我们</h3>
  <img src="/assets/images/wechat-qr.jpg" alt="WeChat QR Code" />
  <p>或添加微信号: brprop</p>
</div>

<style>
.wechat-section {
  text-align: center;
  padding: 2rem;
}

.wechat-section img {
  max-width: 200px;
  border: 2px solid #07C160; /* Verde WeChat */
  border-radius: 8px;
}
</style>
```

---

## SEM WEIXIN? Alternativas Completas

### Opção A: Formulário de Email (Mínimo)

```html
<!-- Simples mas funcional -->
<form action="/api/contact" method="POST">
  <input type="text" name="name" placeholder="姓名" required>
  <input type="email" name="email" placeholder="邮箱" required>
  <textarea name="message" placeholder="留言"></textarea>
  <button type="submit">发送</button>
</form>
```

### Opção B: WhatsApp (bloqueado na China)

```html
<!-- Só funciona FORA da China -->
<a href="https://wa.me/5511999999999">
  <img src="/assets/icons/whatsapp.svg" alt="WhatsApp">
  +55 11 99999-9999
</a>
```

### Opção C: Telegram (funciona na China)

```html
<!-- Boa alternativa ao WhatsApp para China -->
<a href="https://t.me/seu_username">
  <img src="/assets/icons/telegram.svg" alt="Telegram">
  @seu_username
</a>
```

---

## Template de Resposta Automática (WeChat)

```javascript
// Se usar WeChat Work ou API
const autoReply = {
  welcome: `感谢您关注BRprop！

我们专注于帮助中国投资者在巴西购买农业用地。

主要服务:
🌱 大豆、玉米、棉花种植土地
📋 尽职调查和土地评估
🤝 交易完成和文件支持

您的信息已收到，我们会尽快联系您。

如需紧急咨询，请回复"紧急"，我们的团队将优先处理。`,

  inquiry: `感谢您的咨询！

我们已收到您的需求:
- 类型: {interest_type}
- 面积: {area} 公顷
- 作物: {crop_type}

我们的专家将在24小时内审核并回复您。

查看更多土地项目: {website}/properties.html`,

  followUp: `跟进通知

您之前咨询的土地项目有更新:
📍 {location}
🌱 作物: {crop}
📏 面积: {area} 公顷
💰 价格: {price}

感兴趣？请回复"是"，我们将安排视频参观。`
};
```

---

## Integração com Email (Receber Traduzido)

```javascript
// Quando alguém envia mensagem no WeChat
// Encaminhar para seu email

const forwardToEmail = {
  to: 'seu-email@dominio.com',
  subject: '[WeChat] Nova mensagem de {name}',
  body: `
Nova mensagem via WeChat:

Nome: {name}
WeChat: {wechat_id}
Empresa: {company}

Mensagem:
{message}

---
Tradução automática:
{translated_message}

--
Respondendo pelo site: {website}/admin
`
};
```

---

## Checklist WeChat

- [ ] Conta WeChat Official Account criada
- [ ] QR Code baixado em alta resolução
- [ ] Mensagem automática configurada
- [ ] Menu personalizado criado
- [ ] QR Code adicionado ao site
- [ ] Testado enviando mensagem (pedir ajuda amigo na China)
- [ ] Email de encaminhamento configurado

---

## Custos

| Item | Custo |
|------|-------|
| WeChat Subscription Account | Gratuito |
| Verificação de conta | Gratuito (com número chino) ou ~$10-20 (serviço) |
| WeChat Work | ~$60/ano (opcional) |
| Desenvolvimento API | Opcional, se quiser automação |

---

## Dica: Sem Saber Mandarim

1. **Use Google Translate** para mensagens
2. **DeepL** é melhor para Chinês → Português
3. **WeChat tem tradução built-in**:
   - Receba em português
   - Responda em português
   - Ele traduz automaticamente

4. **Para mensagens importantes**:
   - Contrate tradutor no Upwork/Fiverr
   - Custo: ~$10-15/tradução

---

## Próximo Passo

Após configurar WeChat, combine com:
- Email automation (SendGrid/Mailgun)
- Form no site
- Chatbot para respostas automáticas
