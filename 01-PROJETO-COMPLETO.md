# PROJETO: BRprop - Website de Imóveis Rurais para Compradores Chineses

## 1. VISÃO GERAL DO PROJETO

### Nome do Projeto
BRprop

### Propósito
Website para divulgar negócios de broker de imóveis rurais (soja, milho, algodão) para compradores chineses no Brasil.

### Posicionamento Editorial e Comercial
- O site deve soar como uma mesa experiente, prática e confiável para operações imobiliárias rurais no Brasil.
- A linguagem deve ser madura, objetiva e informativa, sem exageros promocionais.
- O leitor deve entender com clareza o que precisa ser verificado em uma operação, o que pode fazer por conta própria e o que a BRprop pode coordenar integralmente se preferir.
- Quando fizer sentido, o site pode mencionar busca documental, due diligence pessoal, de crédito, imobiliária, registral e operacional.
- Modelos de remuneração como pagamento no êxito ou participação em equity só devem aparecer em contextos específicos, como estruturação de operação, mandato ou serviço sob medida, nunca como slogan.
- O site deve diferenciar com cuidado áreas plenamente documentadas de situações informais ou apenas possessórias.

### Público-Alvo
- Compradores chineses interessados em terras rurais brasileiras
- Investidores agrícolas chineses
- Empresas chinesas de importação de grãos (soja, milho, algodão)

### Requisitos Técnicos
- Funcionar dentro da China continental (acesso confiável)
- Idioma: Mandarim (chinês simplificado) + Português (opcional para fallback)
- Sem sistema de autenticação de usuários
- Baixo tráfego (<10k visitas/mês)
- Contato via: WeChat, Email, Formulário

### Stack Tecnológica Escolhida
- **Hospedagem**: Alibaba Cloud ECS (Hong Kong region)
- **CDN**: Cloudflare (global) + Alibaba Cloud CDN (China)
- **Backend**: Node.js/Express ou Python/FastAPI
- **Frontend**: HTML/CSS/JS vanilla (otimizado para velocidade)
- **Formulário**: Node.js backend com email service
- **SSL**: Let's Encrypt (gratuito)
- **Domínio**: .com ou .cn (a definir)

---

## 2. ESTRUTURA DE DIRETÓRIOS DO PROJETO

```
brprop/
├── src/
│   ├── index.html              # Página principal
│   ├── styles/
│   │   ├── main.css           # Estilos principais
│   │   ├── responsive.css     # Estilos responsivos
│   │   └── variables.css      # CSS variables (cores, fontes)
│   ├── scripts/
│   │   ├── main.js            # Lógica principal
│   │   ├── translations.js    # Sistema de tradução
│   │   └── form.js            # Handler do formulário
│   ├── assets/
│   │   ├── images/            # Imagens do site
│   │   ├── icons/             # Ícones (WeChat, etc)
│   │   └── qr-code/           # QR codes para contato
│   └── locales/
│       ├── zh.json            # Traduções em mandarim
│       └── pt.json            # Traduções em português
├── server/
│   ├── index.js               # Servidor Express
│   ├── routes/
│   │   └── contact.js         # Rota de contato
│   └── services/
│       ├── email.js            # Serviço de email
│       └── wechat.js           # Integração WeChat
├── config/
│   ├── nginx.conf             # Configuração Nginx
│   └── ssl/                   # Certificados SSL
├── docker/
│   ├── Dockerfile             # Para containerização
│   └── docker-compose.yml      # Orquestração
├── scripts/
│   ├── setup.sh               # Script de setup
│   └── deploy.sh              # Script de deploy
├── .env.example               # Variáveis de ambiente (exemplo)
├── .gitignore
├── package.json
├── README.md
└── SPEC.md                    # Especificação detalhada
```

---

## 3. ARQUITETURA DO SISTEMA

### Diagrama de Arquitetura

```
                    ┌─────────────────┐
                    │   Usuário       │
                    │   (China)       │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
     ┌────────────┐  ┌────────────┐  ┌────────────┐
     │  Cloudflare│  │  Alibaba   │  │  Direto   │
     │  CDN      │  │  CDN      │  │  (Hong Kong)│
     └────────────┘  └────────────┘  └────────────┘
              │              │              │
              └──────────────┼──────────────┘
                             │
                             ▼
              ┌─────────────────────────┐
              │    Alibaba Cloud ECS    │
              │    (Hong Kong Region)   │
              │                         │
              │  ┌─────────────────┐   │
              │  │   Nginx         │   │
              │  │   (Reverse Proxy)│   │
              │  └────────┬────────┘   │
              │           │            │
              │  ┌────────┴────────┐   │
              │  │   Node.js       │   │
              │  │   Express API   │   │
              │  └─────────────────┘   │
              │           │            │
              │  ┌────────┴────────┐   │
              │  │   Email Service │   │
              │  │   (Nodemailer) │   │
              │  └─────────────────┘   │
              └─────────────────────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌────────────────┐
        │  Email   │  │ WeChat   │  │ Internal Desk  │
        │  do      │  │ Official │  │ Follow-up      │
        │  Broker  │  │ Account  │  │ Workflow       │
        └──────────┘  └──────────┘  └────────────────┘
```

### Fluxo de Dados

```
1. Usuário acessa site (China)
   → Alibaba CDN (China) ou Cloudflare (global)
   → Servidor Hong Kong

2. Usuário preenche formulário
   → POST /api/contact
   → Validação
   → Email enviado para broker
   → Resposta automática enviada para usuário

3. Usuário escaneia QR Code WeChat
   → Abre WeChat Official Account
   → Pode enviar mensagem diretamente
   → Tradução automática WeChat
```

---

## 4. REQUISITOS FUNCIONAIS

### 4.1 Website Estático

#### Páginas Necessárias
1. **Homepage** (`index.html`)
   - Hero section com imagem de fazenda brasileira
   - Título e subtítulo em mandarim com tom prático, confiável e institucional
   - CTA principal para WeChat
   - CTA secundário para a central informativa
   - Botão WeChat com QR code
   - Destaque claro para segurança documental, processo e suporte local
   - Sem promessas absolutas de resultado, crédito ou aprovação

2. **Página de Imóveis** (`/properties.html`)
   - Grid de propriedades
   - Filtros: tipo de operação, tipo de grão, localização, tamanho
   - Cards com fotos e informações básicas
   - Espaço explícito para anúncios de venda e arrendamento
   - Status documental resumido em cada card quando disponível
   - Botão "详情" (Ver Detalhes)

3. **Página de Uma Propriedade** (`/property.html?id=X`)
   - Galeria de fotos
   - Especificações técnicas
   - Mapa da localização
   - Formulário de interesse
   - Botão WeChat flutuante

4. **Página Sobre** (`/about.html`)
   - História da empresa
   - Missão e valores
   - Equipe (fotos e credenciais)
   - Credenciais e perfil profissional com tom sóbrio
   - Explicação clara de como a BRprop atua na parte documental, registral e operacional

5. **Página de Contato** (`/contact.html`)
   - Formulário completo
   - QR Code WeChat grande
   - Informações de contato
   - Mapa da localização do escritório

6. **Página Informativa / Knowledge Center** (`/knowledge.html`)
   - Conteúdo em chinês simplificado com foco operacional
   - Passo a passo de compra de imóvel rural no Brasil
   - Checklist de documentos antes da oferta, contrato e fechamento
   - Explicação sobre registro, escritura, cartório, notariado e cadeia documental
   - Explicação cuidadosa sobre imóveis informais, possessórios ou ainda não regularizados
   - Indicação de que o comprador pode conduzir sozinho ou pedir que a BRprop coordene tudo

#### Sistema de Idioma
- Detecção automática via `navigator.language` ou IP
- Toggle manual de idioma (PT/ZH)
- Persistência da escolha em `localStorage`
- Todos os textos em ambos idiomas no arquivo `locales/`

### 4.2 Formulário de Contato

#### Campos do Formulário
```
- Nome (姓名)
- Email (邮箱)
- Telefone/WeChat (电话/微信)
- Empresa (公司) [opcional]
- Tipo de interesse (感兴趣):
  - 土地购买 (Compra de terra)
  - 土地租赁 (Arrendamento)
  - 尽职调查与文件审查 (Due diligence e revisão documental)
  - 交易结构与落地支持 (Estruturação e suporte à operação)
  - 其他 (Outro)
- Área de interesse em hectares (土地面积)
- Tipo de cultura (作物类型):
  - 大豆 (Soja)
  - 玉米 (Milho)
  - 棉花 (Algodão)
  - 多种作物 (Múltiplas)
- Mensagem (留言)
```

#### Validações
- Email: formato válido
- Telefone: formato internacional aceito (+86, +55)
- Campos obrigatórios: Nome, Email, Tipo de interesse
- Limite de caracteres: mensagem 1000 chars

### 4.3 Serviço de Email

#### Email para Broker (notificação)
```
Assunto: [BRprop] Novo contato de {nome}
De: noreply@brprop.com
Conteúdo:
- Dados do formulário
- Timestamp
- IP do cliente (para referência)
- Link para responder diretamente
```

#### Email de Resposta Automática
```
Assunto: 感谢您的咨询 - BRprop (Obrigado pelo contato)
Para: {email do cliente}
Conteúdo:
- Agradecimento em mandarim
- Confirmação de recebimento
- Prazo de resposta (24-48h)
- Links úteis
- WeChat QR code
```

### 4.4 Integração WeChat

#### WeChat Official Account Setup
1. Criar conta: https://mp.weixin.qq.com/
2. Configurar mensagem automática
3. Gerar QR code para o site
4. Configurar webhook para notifications (opcional)

#### Mensagem Automática (Auto Reply)
```
Quando usuário envia mensagem:
→ "感谢您的联系。
我们已收到您的信息，并会根据问题的性质安排下一步回复。

如您正在评估巴西农村地产，请尽量说明：
- 目标州与地区
- 购买或租赁意向
- 面积范围
- 作物方向
- 是否已在审阅具体项目

如果您愿意自行推进，我们可以先提供文件与流程清单。
如果您希望我们统筹，也可以由我们协调文件核查、尽职调查与交易流程。

BRprop团队"

Tradução: "Obrigado pelo contato.
Recebemos sua mensagem e vamos organizar a próxima resposta conforme a natureza da consulta.

Se estiver avaliando imóvel rural no Brasil, procure indicar:
- estado e região de interesse
- intenção de compra ou arrendamento
- faixa de área
- cultura de interesse
- se já existe um ativo específico em análise

Se preferir conduzir por conta própria, podemos indicar a lista de documentos e etapas.
Se preferir delegar, também podemos coordenar a checagem documental, a due diligence e o fluxo da operação.

Equipe BRprop"
```

### 4.5 Regras de Conteúdo e Delicadeza Jurídica

- Não prometer "segurança total" ou "garantia absoluta" para qualquer ativo rural.
- Não tratar imóvel informal como se tivesse o mesmo nível de proteção de um imóvel plenamente documentado e registrável.
- Quando fizer sentido explicar risco, dizer com clareza que situações apenas possessórias ou informais podem não aceitar crédito, podem exigir presença física e podem expor o comprador a disputa ou perda perante terceiros.
- Essa cautela deve aparecer principalmente na central informativa e, quando aplicável, em páginas de ativo específico.
- O texto deve mostrar que uma operação bem feita depende de documentos, diligência, registro, estrutura e coordenação local.

---

## 5. DESIGN E UX

### 5.1 Paleta de Cores

```css
:root {
  /* Cores principais */
  --color-primary: #1B5E20;      /* Verde escuro (agricultura, Brasil) */
  --color-primary-light: #4CAF50; /* Verde claro */
  --color-secondary: #C9A227;     /* Dourado (soja, colheitas) */
  --color-accent: #D32F2F;       /* Vermelho (CTA, urgência) */
  
  /* Background */
  --bg-light: #FAFAFA;
  --bg-dark: #212121;
  
  /* Textos */
  --text-primary: #212121;
  --text-secondary: #757575;
  --text-inverse: #FFFFFF;
  
  /* Borders e efeitos */
  --border-color: #E0E0E0;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-hover: 0 4px 16px rgba(0,0,0,0.15);
}
```

### 5.2 Tipografia

```css
/* Fontes para Chinês (Mandarim) */
--font-chinese: 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', Arial, sans-serif;

/* Fontes para Português */
--font-portuguese: Arial, 'Segoe UI', sans-serif;

/* Hierarquia */
--text-h1: 3rem;    /* 48px */
--text-h2: 2.25rem; /* 36px */
--text-h3: 1.5rem;  /* 24px */
--text-body: 1rem;   /* 16px */
--text-small: 0.875rem; /* 14px */
```

### 5.3 Layout Responsivo

```css
/* Breakpoints */
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */

/* Grid */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

### 5.4 Componentes UI

#### Botão Primário
```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}
```

#### Card de Propriedade
```css
.property-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.property-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.property-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

#### Formulário
```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.1);
}
```

---

## 6. CONFIGURAÇÕES TÉCNICAS

### 6.1 Alibaba Cloud ECS

```yaml
# Configuração recomendada
Instance: ecs.s6-c1m2.small (1 vCPU, 2GB RAM)
OS: Ubuntu 22.04 LTS
Region: Hong Kong (apigateway-hk.prophezoe.com)
Bandwidth: 5 Mbps (mínimo para China)
Storage: 40GB SSD
```

### 6.2 Nginx Configuration

```nginx
server {
    listen 80;
    server_name brprop.com www.brprop.com;
    
    # Redirecionar para HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name brprop.com www.brprop.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/brprop.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/brprop.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    
    # Static files
    root /var/www/brprop/dist;
    index index.html;
    
    # API routes
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 6.3 Variáveis de Ambiente

```bash
# .env.example
NODE_ENV=production
PORT=3000

# Email (SendGrid, Mailgun, ou SMTP)
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@brprop.com
EMAIL_TO=seu-email@dominio.com

# WeChat (opcional)
WECHAT_APP_ID=your_wechat_app_id
WECHAT_APP_SECRET=your_wechat_app_secret

# Cloudflare (opcional)
CF_API_KEY=your_cloudflare_api_key
CF_ZONE_ID=your_zone_id

# Analytics
ANALYTICS_ID=UA-XXXXXXXXX-X
```

### 6.4 Dockerfile

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["node", "server/index.js"]
```

### 6.5 Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./config/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./config/ssl:/etc/letsencrypt:ro
      - ./dist:/var/www/brprop/dist:ro
    depends_on:
      - app
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

---

## 7. CONTEÚDO DO SITE (TEXTOS)

### 7.1 Homepage - Chinês

```html
<!-- Hero Section -->
<section class="hero">
  <h1>巴西农村地产交易与文件核查</h1>
  <h2>面向中国买家的实务入口</h2>
  <p>先理解文件、登记、尽职调查与交易路径，再讨论报价、结构与落地。</p>
  <p class="subtitle">文件核查 · 尽职调查 · 本地协调 · WeChat接洽</p>
  
  <div class="cta-group">
    <a href="#contact" class="btn-primary">添加微信并开始沟通</a>
    <a href="/knowledge.html" class="btn-secondary">先看交易指南</a>
  </div>
  
  <div class="wechat-qr">
    <img src="/assets/qr-wechat.jpg" alt="添加微信" />
    <p>扫描二维码联系我们</p>
  </div>
</section>

<!-- Features Section -->
<section class="features">
  <h2>中国买家在巴西农村地产交易中最关心什么？</h2>
  
  <div class="feature-grid">
    <div class="feature-card">
      <span class="icon">📑</span>
      <h3>文件与登记</h3>
      <p>先看 matrícula、链条、登记、负担、地籍与占有风险，再决定是否继续推进。</p>
    </div>
    
    <div class="feature-card">
      <span class="icon">🧭</span>
      <h3>交易路径</h3>
      <p>明确是购买、arrendamento 还是结构化合作，不同路径对应不同文件和保障安排。</p>
    </div>
    
    <div class="feature-card">
      <span class="icon">🤝</span>
      <h3>支持方式</h3>
      <p>您可以自行推进，我们提供清单；如 preferir，我们也可以统筹文件核查、尽调与协调流程。</p>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="stats">
  <div class="stat-item">
    <span class="number">01</span>
    <span class="label">先看文件</span>
  </div>
  <div class="stat-item">
    <span class="number">02</span>
    <span class="label">再做尽调</span>
  </div>
  <div class="stat-item">
    <span class="number">03</span>
    <span class="label">然后落地交易</span>
  </div>
</section>
```

### 7.2 Homepage - Português (referência)

```html
<section class="hero">
  <h1>Imóveis Rurais no Brasil com Foco em Processo e Documento</h1>
  <h2>Entrada prática para comprador chinês</h2>
  <p>Primeiro esclareça documento, registro, diligência e estrutura; depois discuta preço, área e operação.</p>
  
  <div class="cta-group">
    <a href="#contact" class="btn-primary">Adicionar WeChat</a>
    <a href="/knowledge.html" class="btn-secondary">Ver Guia</a>
  </div>
</section>
```

### 7.3 Formulário de Contato - Chinês

```html
<form id="contact-form" class="contact-form">
  <div class="form-row">
    <div class="form-group">
      <label for="name">姓名 <span class="required">*</span></label>
      <input type="text" id="name" name="name" required 
             placeholder="请输入您的姓名">
    </div>
    
    <div class="form-group">
      <label for="email">邮箱 <span class="required">*</span></label>
      <input type="email" id="email" name="email" required 
             placeholder="请输入您的邮箱">
    </div>
  </div>
  
  <div class="form-row">
    <div class="form-group">
      <label for="phone">电话/微信</label>
      <input type="text" id="phone" name="phone" 
             placeholder="请输入您的电话或微信号">
    </div>
    
    <div class="form-group">
      <label for="company">公司</label>
      <input type="text" id="company" name="company" 
             placeholder="请输入您的公司名称（选填）">
    </div>
  </div>
  
  <div class="form-row">
    <div class="form-group">
      <label for="interest">感兴趣 <span class="required">*</span></label>
      <select id="interest" name="interest" required>
        <option value="">请选择</option>
        <option value="land_purchase">土地购买</option>
        <option value="lease">土地租赁</option>
        <option value="diligence">尽职调查与文件审查</option>
        <option value="structuring">交易结构与落地支持</option>
        <option value="other">其他</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="area">土地面积（公顷）</label>
      <input type="number" id="area" name="area" min="0" 
             placeholder="请输入所需面积">
    </div>
  </div>
  
  <div class="form-group">
    <label for="crop">作物类型</label>
    <select id="crop" name="crop">
      <option value="">请选择</option>
      <option value="soybean">大豆</option>
      <option value="corn">玉米</option>
      <option value="cotton">棉花</option>
      <option value="multiple">多种作物</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">留言</label>
    <textarea id="message" name="message" rows="5" 
              placeholder="请输入您的留言或问题"></textarea>
  </div>
  
  <button type="submit" class="btn-submit">
    发送咨询
  </button>
</form>
```

---

## 8. TRADUÇÕES (LOCAIS)

### 8.1 Arquivo: locales/zh.json

```json
{
  "site": {
    "name": "BRprop",
    "tagline": "面向中国买家的巴西农村地产实务与文件支持"
  },
  "nav": {
    "home": "首页",
    "properties": "土地项目",
    "about": "关于我们",
    "contact": "联系我们"
  },
  "hero": {
    "title": "巴西农村地产交易与文件核查",
    "subtitle": "面向中国买家的实务入口",
    "description": "先理解文件、登记、尽职调查与交易路径，再讨论报价、结构与落地。",
    "cta": "添加微信并开始沟通",
    "secondaryCta": "先看交易指南"
  },
  "features": {
    "title": "中国买家在巴西农村地产交易中最关心什么？",
    "fertile": {
      "title": "文件与登记",
      "description": "先看 matrícula、链条、登记、负担、地籍与占有风险，再决定是否继续推进。"
    },
    "returns": {
      "title": "交易路径",
      "description": "明确是购买、arrendamento 还是结构化合作，不同路径对应不同文件和保障安排。"
    },
    "service": {
      "title": "支持方式",
      "description": "您可以自行推进，我们提供清单；如 preferir，我们也可以统筹文件核查、尽调与协调流程。"
    }
  },
  "stats": {
    "cases": "先看文件",
    "hectares": "再做尽调",
    "experience": "然后落地交易"
  },
  "form": {
    "name": "姓名",
    "email": "邮箱",
    "phone": "电话/微信",
    "company": "公司",
    "interest": "感兴趣",
    "interestTypes": {
      "land_purchase": "土地购买",
      "lease": "土地租赁",
      "diligence": "尽职调查与文件审查",
      "structuring": "交易结构与落地支持",
      "other": "其他"
    },
    "area": "土地面积（公顷）",
    "crop": "作物类型",
    "crops": {
      "soybean": "大豆",
      "corn": "玉米",
      "cotton": "棉花",
      "multiple": "多种作物"
    },
    "message": "留言",
    "submit": "发送咨询",
    "required": "必填",
    "success": "您的咨询已发送！我们将在24-48小时内与您联系。",
    "error": "发送失败，请稍后重试或通过微信联系我们。"
  },
  "footer": {
    "copyright": "© 2024 BRprop. 专业巴西农业用地经纪",
    "disclaimer": " disclaimer"
  },
  "wechat": {
    "scan": "扫描二维码联系我们",
    "qrAlt": "添加微信"
  }
}
```

### 8.2 Arquivo: locales/pt.json

```json
{
  "site": {
    "name": "BRprop",
    "tagline": "Suporte prático e documental para imóvel rural com comprador chinês"
  },
  "nav": {
    "home": "Início",
    "properties": "Imóveis",
    "about": "Sobre",
    "contact": "Contato"
  },
  "hero": {
    "title": "Imóveis Rurais no Brasil com Foco em Processo e Documento",
    "subtitle": "Entrada prática para comprador chinês",
    "description": "Primeiro esclareça documento, registro, diligência e estrutura; depois discuta preço, área e operação.",
    "cta": "Adicionar WeChat",
    "secondaryCta": "Ver Guia"
  },
  "features": {
    "title": "O que precisa ser entendido antes de avançar?",
    "fertile": {
      "title": "Documento e registro",
      "description": "A decisão começa na matrícula, na cadeia dominial, nos ônus, nos cadastros e no risco possessório."
    },
    "returns": {
      "title": "Estrutura da operação",
      "description": "Compra, arrendamento e operação estruturada exigem trilhas documentais, garantias e decisões diferentes."
    },
    "service": {
      "title": "Como ajudamos",
      "description": "Você pode seguir por conta própria com checklist e orientação, ou pedir que coordenemos tudo."
    }
  },
  "stats": {
    "cases": "Primeiro os documentos",
    "hectares": "Depois a diligência",
    "experience": "Só então a operação"
  },
  "form": {
    "name": "Nome",
    "email": "Email",
    "phone": "Telefone/WeChat",
    "company": "Empresa",
    "interest": "Interesse",
    "interestTypes": {
      "land_purchase": "Compra de Terra",
      "lease": "Arrendamento",
      "diligence": "Due diligence e revisão documental",
      "structuring": "Estruturação e suporte à operação",
      "other": "Outro"
    },
    "area": "Área (hectares)",
    "crop": "Tipo de Cultura",
    "crops": {
      "soybean": "Soja",
      "corn": "Milho",
      "cotton": "Algodão",
      "multiple": "Múltiplas"
    },
    "message": "Mensagem",
    "submit": "Enviar Consulta",
    "required": "obrigatório",
    "success": "Sua consulta foi enviada! Entraremos em contato em 24-48 horas.",
    "error": "Erro ao enviar. Tente novamente ou nos contate via WeChat."
  },
  "footer": {
    "copyright": "© 2024 BRprop. Corretora de Terras Agrícolas Brasileiras",
    "disclaimer": "Disclaimer"
  },
  "wechat": {
    "scan": "Escaneie o QR code para nos contatar",
    "qrAlt": "Adicionar WeChat"
  }
}
```

---

## 9. SCRIPTS DE SETUP E DEPLOY

### 9.1 Script de Setup: setup.sh

```bash
#!/bin/bash

# BRprop - Setup Script
# Execute: chmod +x setup.sh && ./setup.sh

set -e

echo "🚀 BRprop Setup Script"
echo "======================"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check prerequisites
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}Erro: $1 não está instalado${NC}"
        exit 1
    fi
}

echo -e "${YELLOW}Verificando pré-requisitos...${NC}"
check_command node
check_command npm
check_command docker
check_command docker-compose

# Get admin privileges for nginx
echo -e "${YELLOW}Instalando dependências do sistema...${NC}"
if command -v apt-get &> /dev/null; then
    sudo apt-get update
    sudo apt-get install -y nginx certbot python3-certbot-nginx
elif command -v yum &> /dev/null; then
    sudo yum install -y nginx certbot python3-certbot-nginx
fi

# Create project directory
PROJECT_DIR="/var/www/brprop"
echo -e "${YELLOW}Criando diretório do projeto: $PROJECT_DIR${NC}"
sudo mkdir -p $PROJECT_DIR
sudo chown $USER:$USER $PROJECT_DIR

# Clone or create project (if not exists)
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo -e "${YELLOW}Inicializando projeto Node.js...${NC}"
    cd $PROJECT_DIR
    npm init -y
fi

# Install dependencies
echo -e "${YELLOW}Instalando dependências npm...${NC}"
cd $PROJECT_DIR
npm install

# Setup environment file
if [ ! -f "$PROJECT_DIR/.env" ]; then
    echo -e "${YELLOW}Criando arquivo .env...${NC}"
    cp "$PROJECT_DIR/.env.example" "$PROJECT_DIR/.env"
    echo -e "${GREEN}⚠️  Edite o arquivo .env com suas credenciais!${NC}"
fi

# Build the project
echo -e "${YELLOW}Buildando o projeto...${NC}"
npm run build

# Setup Nginx
echo -e "${YELLOW}Configurando Nginx...${NC}"
sudo cp "$PROJECT_DIR/config/nginx.conf" /etc/nginx/sites-available/brprop
sudo ln -sf /etc/nginx/sites-available/brprop /etc/nginx/sites-enabled/

# Test Nginx config
sudo nginx -t

# Setup SSL (Let's Encrypt)
echo -e "${YELLOW}Configurando SSL...${NC}"
sudo certbot --nginx -d brprop.com -d www.brprop.com --non-interactive --agree-tos --email seu-email@dominio.com

# Enable and start services
echo -e "${YELLOW}Iniciando serviços...${NC}"
sudo systemctl enable nginx
sudo systemctl restart nginx

# Start with Docker (alternative)
# docker-compose up -d

echo -e "${GREEN}"
echo "========================================"
echo "✅ Setup concluído!"
echo "========================================"
echo ""
echo "Próximos passos:"
echo "1. Edite o arquivo .env com suas credenciais"
echo "2. Configure o DNS do seu domínio"
echo "3. Acesse https://brprop.com"
echo ""
echo -e "${NC}"
```

### 9.2 Script de Deploy: deploy.sh

```bash
#!/bin/bash

# BRprop - Deploy Script
# Execute: ./deploy.sh

set -e

echo "📦 BRprop Deploy Script"
echo "======================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Config
PROJECT_DIR="/var/www/brprop"
BACKUP_DIR="/var/www/brprop/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Build
echo -e "${YELLOW}1/4 - Buildando projeto...${NC}"
cd $PROJECT_DIR
npm run build

# Backup
echo -e "${YELLOW}2/4 - Fazendo backup...${NC}"
mkdir -p $BACKUP_DIR
tar -czf "$BACKUP_DIR/build_$TIMESTAMP.tar.gz" -C $PROJECT_DIR/dist .

# Deploy
echo -e "${YELLOW}3/4 - Fazendo deploy...${NC}"
rsync -avz --delete $PROJECT_DIR/dist/ /var/www/brprop/html/

# Restart services
echo -e "${YELLOW}4/4 - Reiniciando serviços...${NC}"
sudo systemctl restart nginx
# ou: docker-compose restart app

echo -e "${GREEN}"
echo "========================================"
echo "✅ Deploy concluído!"
echo "========================================"
echo ""
echo "Backup salvo em: $BACKUP_DIR/build_$TIMESTAMP.tar.gz"
echo -e "${NC}"
```

---

## 10. CHECKLIST DE LAUNCH

### Antes do Launch
- [ ] Domínio registrado e DNS configurado
- [ ] SSL certificate instalado e funcionando
- [ ] Todos os textos em mandarim revisados
- [ ] Formulário de contato testado
- [ ] Emails sendo enviados corretamente
- [ ] QR Code do WeChat funcionando
- [ ] Site responsivo testado (mobile)
- [ ] Teste de velocidade (GTmetrix/PageSpeed)
- [ ] Analytics instalado (opcional)

### Depois do Launch
- [ ] Monitoramento de uptime configurado
- [ ] Backup automático agendado
- [ ] Logs sendo monitorados
- [ ] CND (Cloudflare/Alibaba) configurado
- [ ] WeChat Official Account verificado
- [ ] Email de resposta automática testado

---

## 11. CUSTOS ESTIMADOS (MENSAL)

| Serviço | Provedor | Custo Estimado |
|---------|----------|-----------------|
| ECS Server | Alibaba Cloud | $20-30 USD |
| CDN (China) | Alibaba Cloud CDN | $10-20 USD |
| Domínio | Namecheap/GoDaddy | $10-15 USD/ano |
| SSL | Let's Encrypt | Gratuito |
| Email | SendGrid | $0-20 USD (tier gratuito) |
| **Total** | | **~$40-70 USD/mês** |

---

## 12. CONTATO E SUPORTE

Para dúvidas técnicas sobre este projeto:
- Email: [a definir]
- WeChat: [a definir]
- GitHub Issues: [link do repo]

---

*Documento criado em: 2024*
*Versão: 1.0*
