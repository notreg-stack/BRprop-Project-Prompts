# BRprop - Prompts para Criação do Projeto

Este folder contém todos os prompts necessários para uma IA criar o projeto completo do zero.

---

## 📁 ESTRUTURA DOS PROMPTS

```
BRprop-Project-Prompts/
├── 01-PROJETO-COMPLETO.md    ← Especificação completa do projeto
├── 02-ALIBABA-CLOUD-SETUP.md  ← Setup do servidor Alibaba Cloud
├── 03-WECHAT-SETUP.md         ← Configuração do WeChat
├── 04-WEBSITE-CODIGO.md       ← Código completo do frontend (HTML/CSS/JS)
├── 05-BACKEND-SERVER.md        ← Backend Node.js + API + Email
├── 06-DEPLOY-GUIDE.md         ← Guia de deploy passo a passo
└── README.md                   ← Este arquivo
```

---

## 🎯 COMO USAR

### Opção 1: Fornecer todos os prompts de uma vez

Copie o conteúdo de cada arquivo .md e forneça à IA na ordem:

1. **Primeiro**: `01-PROJETO-COMPLETO.md` - para definir a visão
2. **Segundo**: `04-WEBSITE-CODIGO.md` - para criar o frontend
3. **Terceiro**: `05-BACKEND-SERVER.md` - para criar o backend
4. **Quarto**: `02-ALIBABA-CLOUD-SETUP.md` - para configurar servidor
5. **Quinto**: `03-WECHAT-SETUP.md` - para configurar WeChat
6. **Sexto**: `06-DEPLOY-GUIDE.md` - para fazer o deploy

### Opção 2: Fornecer um por um

Dê um prompt de cada vez, na ordem numérica, esperando a IA completar cada fase antes de passar para a próxima.

---

## 📋 RESUMO DE CADA PROMPT

### 01-PROJETO-COMPLETO.md
**O que contém:**
- Visão geral do projeto
- Arquitetura do sistema
- Requisitos funcionais
- Regras de tom, confiança e delicadeza jurídica/comercial
- Design (cores, tipografia, layout)
- Estrutura de diretórios
- Configurações técnicas

**Quando usar:** Quando a IA precisa entender TODO o contexto antes de começar.

---

### 02-ALIBABA-CLOUD-SETUP.md
**O que contém:**
- Como criar conta Alibaba Cloud
- Como criar ECS instance (Hong Kong)
- Configuração de Security Group
- Setup de SSH
- Instalação de Nginx, Node.js, Docker
- Configuração de SSL

**Quando usar:** Quando chegar a hora de configurar o servidor.

---

### 03-WECHAT-SETUP.md
**O que contém:**
- Como criar WeChat Official Account
- Configuração de mensagens automáticas
- Como obter QR Code
- Template de respostas automáticas
- Integração com email
- Alternativas se não tiver número chinês

**Quando usar:** Quando precisar configurar o sistema de contato via WeChat.

---

### 04-WEBSITE-CODIGO.md
**O que contém:**
- `index.html` completo (Homepage)
- `properties.html` (Lista de imóveis)
- `property-detail.html` (Detalhes)
- `knowledge.html` (Guia de compra, checklist e diligência)
- `about.html` (Sobre)
- `contact.html` (Contato)
- `styles/` (CSS completo)
- `scripts/` (JavaScript com tradução)
- Sistema de tradução ZH/PT

**Quando usar:** Quando for criar o frontend do site.

---

### 05-BACKEND-SERVER.md
**O que contém:**
- API Express com `/api/contact`
- Validação com Zod
- Rate limiting
- Integração SendGrid/Mailgun
- Emails em mandarim (auto-reply)
- Logging

**Quando usar:** Quando for criar o backend para processar formulários.

---

### 06-DEPLOY-GUIDE.md
**O que contém:**
- Passo a passo completo de deploy
- Comandos para copiar e colar
- Troubleshooting
- Checklist final
- Comandos úteis do servidor

**Quando usar:** Quando for colocar o site no ar.

---

## 🔄 FLUXO DE TRABALHO RECOMENDADO

```
┌─────────────────────────────────────────┐
│  1. FORNEÇA: 01-PROJETO-COMPLETO.md    │
│     (Contexto inicial)                  │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  2. FORNEÇA: 04-WEBSITE-CODIGO.md       │
│     (Cria frontend)                      │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  3. FORNEÇA: 05-BACKEND-SERVER.md       │
│     (Cria backend)                       │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  4. FORNEÇA: 02-ALIBABA-CLOUD-SETUP.md  │
│     (Configura servidor)                 │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  5. FORNEÇA: 03-WECHAT-SETUP.md         │
│     (Configura WeChat)                  │
└─────────────────┬───────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│  6. FORNEÇA: 06-DEPLOY-GUIDE.md         │
│     (Faz deploy)                         │
└─────────────────────────────────────────┘
```

---

## ✨ DICAS

1. **Leia cada prompt antes de fornecer** para entender o que será criado
2. **Siga a ordem** para garantir que cada fase building sobre a anterior
3. **Personalize** os prompts com informações específicas (nome do projeto, domínio, etc)
4. **Salve outputs** da IA em cada fase antes de passar para a próxima

---

## 📞 SUPORTE

Se tiver dúvidas sobre algum dos prompts:
- Revise o arquivo `01-PROJETO-COMPLETO.md` para visão geral
- Check `06-DEPLOY-GUIDE.md` para troubleshooting

---

**Criado:** 2024
**Versão:** 1.0
