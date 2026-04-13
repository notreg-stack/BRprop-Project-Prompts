# PROMPT: Criar Website BRprop - Frontend

## Objetivo
Criar o website completo do BRprop com todas as páginas, estilos e funcionalidades.

## Regras obrigatórias antes de gerar qualquer arquivo

- O tom do site deve ser prático, maduro, informativo e confiável.
- O site deve parecer uma mesa experiente de apoio a operações imobiliárias rurais, não uma landing page genérica de investimento.
- Não usar Google Fonts, Google Maps, YouTube embeds ou dependências críticas degradadas na China continental.
- A homepage deve conduzir para WeChat e para a área informativa, sem exagerar em promessas.
- A IA deve reservar espaço claro para anúncios de imóveis rurais de venda e de arrendamento.
- A área informativa deve explicar processo, checklist documental, due diligence e diferenças entre ativo plenamente documentado e situação informal ou possessória.
- Quando mencionar serviços, mostrar que o cliente pode fazer por conta própria ou delegar integralmente à BRprop.
- Menções a pagamento no êxito, mandato, retainer ou equity devem aparecer apenas em blocos contextuais de serviços, nunca como chamada principal da homepage.
- Não prometer segurança absoluta, crédito garantido, aprovação regulatória ou qualquer certeza jurídica indevida.

---

## ESTRUTURA DE ARQUIVOS

```
src/
├── index.html
├── properties.html
├── property-detail.html
├── knowledge.html
├── article.html
├── about.html
├── contact.html
├── styles/
│   ├── main.css
│   ├── variables.css
│   ├── components.css
│   └── responsive.css
├── scripts/
│   ├── main.js
│   ├── translations.js
│   ├── form.js
│   ├── data.js
│   └── smooth-scroll.js
└── assets/
    ├── images/
    ├── icons/
    └── qr-codes/
```

---

## 1. ARQUIVO: index.html (Homepage)

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="BRprop - 面向中国买家的巴西农村地产交易、文件核查与尽职调查入口">
    <title>BRprop - 巴西农村地产交易、文件与尽职调查</title>
    
    <!-- Styles -->
    <link rel="stylesheet" href="/styles/variables.css">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="stylesheet" href="/styles/components.css">
    <link rel="stylesheet" href="/styles/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <a href="/" class="logo">
                <span class="logo-icon">🌱</span>
                <span class="logo-text">BRprop</span>
            </a>
            <button class="mobile-menu-btn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="/" class="active" data-i18n="nav.home">首页</a></li>
                <li><a href="/properties.html" data-i18n="nav.properties">土地项目</a></li>
                <li><a href="/knowledge.html" data-i18n="nav.knowledge">交易指南</a></li>
                <li><a href="/about.html" data-i18n="nav.about">关于我们</a></li>
                <li><a href="/contact.html" data-i18n="nav.contact">联系我们</a></li>
                <li class="lang-toggle">
                    <button class="btn-lang" data-lang="pt">PT</button>
                    <button class="btn-lang active" data-lang="zh">中文</button>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title" data-i18n="hero.title">巴西农村地产交易与文件核查</h1>
                <h2 class="hero-subtitle" data-i18n="hero.subtitle">面向中国买家的实务入口</h2>
                <p class="hero-description" data-i18n="hero.description">先理解文件、登记、尽职调查与交易路径，再讨论报价、结构与落地。</p>
                <div class="hero-badges">
                    <span class="badge">📑 文件核查</span>
                    <span class="badge">🧭 尽职调查</span>
                    <span class="badge">🤝 本地协调</span>
                </div>
                <div class="hero-cta">
                    <a href="#contact-form" class="btn btn-primary" data-i18n="hero.cta">添加微信并开始沟通</a>
                    <a href="/knowledge.html" class="btn btn-secondary" data-i18n="hero.secondaryCta">先看交易指南</a>
                </div>
                <div class="hero-wechat">
                    <img src="/assets/qr-codes/wechat-qr.png" alt="WeChat QR Code" class="wechat-qr">
                    <p data-i18n="wechat.scan">扫描二维码联系我们</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title" data-i18n="features.title">进入交易讨论前，先确认什么？</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📑</div>
                    <h3 data-i18n="features.fertile.title">文件与登记</h3>
                    <p data-i18n="features.fertile.description">先看 matrícula、链条、登记、负担、地籍与占有风险，再决定是否继续推进。</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧭</div>
                    <h3 data-i18n="features.returns.title">交易路径</h3>
                    <p data-i18n="features.returns.description">购买、arrendamento 与 operação estruturada exigem garantias, documentos e passos diferentes.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🤝</div>
                    <h3 data-i18n="features.service.title">支持方式</h3>
                    <p data-i18n="features.service.description">您可以自己推进，我们提供 checklist；如 preferir，我们可以统筹文件、尽调与流程。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">01</span>
                    <span class="stat-label" data-i18n="stats.cases">先看文件</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">02</span>
                    <span class="stat-label" data-i18n="stats.hectares">再做尽调</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">03</span>
                    <span class="stat-label" data-i18n="stats.experience">然后落地交易</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Properties Preview -->
    <section class="properties-preview" id="properties">
        <div class="container">
            <h2 class="section-title">项目广告位：出售与 arrendamento</h2>
            <p class="section-intro">Aqui deve haver espaço visível para anúncios reais de imóveis rurais, com separação clara entre venda e arrendamento.</p>
            <div class="properties-grid" id="properties-grid">
                <!-- Loaded via JS -->
            </div>
            <div class="text-center">
                <a href="/properties.html" class="btn btn-outline">查看所有项目 →</a>
            </div>
        </div>
    </section>

    <!-- Knowledge Preview -->
    <section class="knowledge-preview" id="knowledge">
        <div class="container">
            <h2 class="section-title">交易信息与文件指南</h2>
            <div class="knowledge-grid">
                <article class="knowledge-card">
                    <h3>购买农村地产的步骤</h3>
                    <p>解释从初步筛选、文件收集、尽职调查、合同到登记落地的流程。</p>
                </article>
                <article class="knowledge-card">
                    <h3>文件清单与尽职调查</h3>
                    <p>列出 matrícula、certidões、cadastros、环境、信用和主体审查的顺序。</p>
                </article>
                <article class="knowledge-card">
                    <h3>关于 informal assets 的警示</h3>
                    <p>仅在真正需要时解释：纯 possessory ou informal situations não equivalem a ativo plenamente documentado.</p>
                </article>
            </div>
            <div class="text-center">
                <a href="/knowledge.html" class="btn btn-secondary">查看完整指南</a>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section" id="contact-form">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h2 data-i18n="contact.title">联系我们</h2>
                    <p data-i18n="contact.subtitle">准备好开始您的农业投资之旅了吗？</p>
                    
                    <div class="contact-methods">
                        <div class="contact-method">
                            <span class="method-icon">💬</span>
                            <div>
                                <h4>WeChat</h4>
                                <p>brprop_com</p>
                            </div>
                        </div>
                        <div class="contact-method">
                            <span class="method-icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>contact@brprop.com</p>
                            </div>
                        </div>
                        <div class="contact-method">
                            <span class="method-icon">📍</span>
                            <div>
                                <h4 data-i18n="contact.location">地址</h4>
                                <p>São Paulo, Brazil</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="wechat-qr-large">
                        <img src="/assets/qr-codes/wechat-qr.png" alt="WeChat QR">
                    </div>
                </div>
                
                <div class="contact-form-wrapper">
                    <form id="contact-form" class="contact-form" novalidate>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name" data-i18n="form.name">姓名 <span class="required">*</span></label>
                                <input type="text" id="name" name="name" required 
                                       placeholder="请输入您的姓名">
                            </div>
                            <div class="form-group">
                                <label for="email" data-i18n="form.email">邮箱 <span class="required">*</span></label>
                                <input type="email" id="email" name="email" required 
                                       placeholder="请输入您的邮箱">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone" data-i18n="form.phone">电话/微信</label>
                                <input type="text" id="phone" name="phone" 
                                       placeholder="请输入您的电话或微信号">
                            </div>
                            <div class="form-group">
                                <label for="company" data-i18n="form.company">公司</label>
                                <input type="text" id="company" name="company" 
                                       placeholder="请输入您的公司名称（选填）">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="interest" data-i18n="form.interest">感兴趣 <span class="required">*</span></label>
                                <select id="interest" name="interest" required>
                                    <option value="" data-i18n="form.select">请选择</option>
                                    <option value="land_purchase" data-i18n="form.interestTypes.land_purchase">土地购买</option>
                                    <option value="lease" data-i18n="form.interestTypes.lease">土地租赁</option>
                                    <option value="diligence" data-i18n="form.interestTypes.diligence">尽职调查与文件审查</option>
                                    <option value="structuring" data-i18n="form.interestTypes.structuring">交易结构与落地支持</option>
                                    <option value="other" data-i18n="form.interestTypes.other">其他</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="area" data-i18n="form.area">土地面积（公顷）</label>
                                <input type="number" id="area" name="area" min="0" 
                                       placeholder="请输入所需面积">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="crop" data-i18n="form.crop">作物类型</label>
                            <select id="crop" name="crop">
                                <option value="" data-i18n="form.select">请选择</option>
                                <option value="soybean" data-i18n="form.crops.soybean">大豆</option>
                                <option value="corn" data-i18n="form.crops.corn">玉米</option>
                                <option value="cotton" data-i18n="form.crops.cotton">棉花</option>
                                <option value="multiple" data-i18n="form.crops.multiple">多种作物</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message" data-i18n="form.message">留言</label>
                            <textarea id="message" name="message" rows="5" 
                                      placeholder="请输入您的留言或问题"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-submit" data-i18n="form.submit">
                            发送咨询
                        </button>
                        
                        <div class="form-message" id="form-message"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <span class="logo-icon">🌱</span>
                    <span class="logo-text">BRprop</span>
                    <p data-i18n="site.tagline">面向中国买家的巴西农村地产实务与文件支持</p>
                </div>
                <div class="footer-links">
                    <a href="/">首页</a>
                    <a href="/properties.html">土地项目</a>
                    <a href="/about.html">关于我们</a>
                    <a href="/contact.html">联系我们</a>
                </div>
                <div class="footer-social">
                    <a href="#" aria-label="WeChat">
                        <img src="/assets/icons/wechat.svg" alt="WeChat">
                    </a>
                    <a href="#" aria-label="Email">
                        <img src="/assets/icons/email.svg" alt="Email">
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-i18n="footer.copyright">© 2024 BRprop. 专业巴西农业用地经纪</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="/scripts/translations.js"></script>
    <script src="/scripts/form.js"></script>
    <script src="/scripts/main.js"></script>
</body>
</html>
```

---

## 2. ARQUIVO: styles/variables.css

```css
:root {
    /* Colors */
    --color-primary: #1B5E20;
    --color-primary-light: #4CAF50;
    --color-primary-dark: #0D3D11;
    --color-secondary: #C9A227;
    --color-secondary-light: #E6C84D;
    --color-accent: #D32F2F;
    --color-accent-light: #EF5350;
    
    /* Background */
    --bg-light: #FAFAFA;
    --bg-white: #FFFFFF;
    --bg-dark: #212121;
    --bg-gradient: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    
    /* Text */
    --text-primary: #212121;
    --text-secondary: #757575;
    --text-light: #9E9E9E;
    --text-inverse: #FFFFFF;
    --text-accent: var(--color-accent);
    
    /* Borders */
    --border-color: #E0E0E0;
    --border-radius: 8px;
    --border-radius-lg: 16px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);
    --shadow-hover: 0 8px 32px rgba(0,0,0,0.2);
    
    /* Typography */
    --font-primary: 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', Arial, sans-serif;
    --font-chinese: 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', Arial, sans-serif;
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 4rem;
    --space-xxl: 6rem;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Z-index */
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-modal: 300;
    --z-tooltip: 400;
}

/* Dark mode (optional) */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-light: #121212;
        --bg-white: #1E1E1E;
        --text-primary: #FFFFFF;
        --text-secondary: #B0B0B0;
        --border-color: #333333;
    }
}
```

---

## 3. ARQUIVO: styles/main.css

```css
/* Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-primary);
    background-color: var(--bg-light);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}

ul {
    list-style: none;
}

/* Container */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-md);
}

h1 { font-size: 3rem; }
h2 { font-size: 2.25rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

p {
    margin-bottom: var(--space-md);
}

/* Section Title */
.section-title {
    text-align: center;
    margin-bottom: var(--space-xl);
    color: var(--color-primary);
}

/* Text utilities */
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Spacing utilities */
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--space-sm); }
.mb-2 { margin-bottom: var(--space-md); }
.mb-3 { margin-bottom: var(--space-lg); }
.mb-4 { margin-bottom: var(--space-xl); }
```

---

## 4. ARQUIVO: styles/components.css

```css
/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--border-radius);
    transition: all var(--transition-normal);
    cursor: pointer;
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--text-inverse);
}

.btn-primary:hover {
    background-color: #B71C1C;
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background-color: var(--color-primary);
    color: var(--text-inverse);
}

.btn-secondary:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
}

.btn-outline {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    background: transparent;
}

.btn-outline:hover {
    background-color: var(--color-primary);
    color: var(--text-inverse);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--bg-white);
    box-shadow: var(--shadow-sm);
    z-index: var(--z-sticky);
    padding: var(--space-md) 0;
}

.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
}

.logo-icon {
    font-size: 2rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
}

.nav-links a {
    font-weight: 500;
    color: var(--text-secondary);
    padding: var(--space-sm) 0;
    border-bottom: 2px solid transparent;
    transition: all var(--transition-fast);
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}

.lang-toggle {
    display: flex;
    gap: var(--space-xs);
    margin-left: var(--space-md);
    padding-left: var(--space-md);
    border-left: 1px solid var(--border-color);
}

.btn-lang {
    padding: var(--space-xs) var(--space-sm);
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    background: var(--bg-light);
}

.btn-lang.active {
    background: var(--color-primary);
    color: var(--text-inverse);
}

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: var(--space-sm);
}

.mobile-menu-btn span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition-fast);
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: flex;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-white);
        flex-direction: column;
        padding: var(--space-md);
        box-shadow: var(--shadow-md);
    }
    
    .nav-links.active {
        display: flex;
    }
}
```

---

## 5. ARQUIVO: styles/responsive.css

```css
/* Mobile First Approach */

/* Extra Small Devices */
@media (max-width: 575.98px) {
    html { font-size: 14px; }
    
    h1 { font-size: 2.25rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.25rem; }
    
    .container { padding: 0 var(--space-sm); }
    
    .hero-content {
        padding: var(--space-lg);
    }
    
    .hero-cta {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        margin-bottom: var(--space-sm);
    }
}

/* Small Devices (Tablets) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .container { padding: 0 var(--space-md); }
    
    .hero-title { font-size: 2.5rem; }
}

/* Medium Devices (Small Laptops) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .container { max-width: 720px; }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-wrapper {
        grid-template-columns: 1fr;
    }
}

/* Large Devices (Desktops) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .container { max-width: 960px; }
    
    .hero-content {
        max-width: 600px;
    }
    
    .contact-wrapper {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-xl);
    }
}

/* Extra Large Devices */
@media (min-width: 1200px) {
    .container { max-width: 1200px; }
    
    .hero {
        padding: var(--space-xxl) 0;
    }
}

/* Touch Devices */
@media (hover: none) and (pointer: coarse) {
    .btn:hover {
        transform: none;
    }
    
    .nav-links a:hover {
        border-bottom: none;
    }
}
```

---

## 6. ARQUIVO: scripts/translations.js

```javascript
const translations = {
    zh: {
        site: {
            name: 'BRprop',
            tagline: '面向中国买家的巴西农村地产实务与文件支持'
        },
        nav: {
            home: '首页',
            properties: '土地项目',
            knowledge: '交易指南',
            about: '关于我们',
            contact: '联系我们'
        },
        hero: {
            title: '巴西农村地产交易与文件核查',
            subtitle: '面向中国买家的实务入口',
            description: '先理解文件、登记、尽职调查与交易路径，再讨论报价、结构与落地。',
            cta: '添加微信并开始沟通',
            secondaryCta: '先看交易指南'
        },
        features: {
            title: '进入交易讨论前，先确认什么？',
            fertile: {
                title: '文件与登记',
                description: '先看 matrícula、链条、登记、负担、地籍与占有风险，再决定是否继续推进。'
            },
            returns: {
                title: '交易路径',
                description: '购买、arrendamento 与 operação estruturada exigem garantias, documentos e passos diferentes.'
            },
            service: {
                title: '支持方式',
                description: '您可以自己推进，我们提供 checklist；如 preferir，我们可以统筹文件、尽调与流程。'
            }
        },
        stats: {
            cases: '先看文件',
            hectares: '再做尽调',
            experience: '然后落地交易'
        },
        form: {
            name: '姓名',
            email: '邮箱',
            phone: '电话/微信',
            company: '公司',
            interest: '感兴趣',
            interestTypes: {
                land_purchase: '土地购买',
                lease: '土地租赁',
                diligence: '尽职调查与文件审查',
                structuring: '交易结构与落地支持',
                other: '其他'
            },
            area: '土地面积（公顷）',
            crop: '作物类型',
            crops: {
                soybean: '大豆',
                corn: '玉米',
                cotton: '棉花',
                multiple: '多种作物'
            },
            message: '留言',
            submit: '发送咨询',
            required: '必填',
            select: '请选择',
            success: '您的咨询已发送！我们将在24-48小时内与您联系。',
            error: '发送失败，请稍后重试或通过微信联系我们。'
        },
        wechat: {
            scan: '扫描二维码联系我们'
        },
        footer: {
            copyright: '© 2024 BRprop. 专业巴西农业用地经纪'
        }
    },
    pt: {
        site: {
            name: 'BRprop',
            tagline: 'Suporte prático e documental para imóvel rural com comprador chinês'
        },
        nav: {
            home: 'Início',
            properties: 'Imóveis',
            knowledge: 'Guia',
            about: 'Sobre',
            contact: 'Contato'
        },
        hero: {
            title: 'Imóveis Rurais no Brasil com Foco em Processo e Documento',
            subtitle: 'Entrada prática para comprador chinês',
            description: 'Primeiro esclareça documento, registro, diligência e estrutura; depois discuta preço, área e operação.',
            cta: 'Adicionar WeChat',
            secondaryCta: 'Ver Guia'
        },
        features: {
            title: 'O que precisa ser entendido antes de avançar?',
            fertile: {
                title: 'Documento e registro',
                description: 'A decisão começa na matrícula, na cadeia dominial, nos ônus, nos cadastros e no risco possessório.'
            },
            returns: {
                title: 'Estrutura da operação',
                description: 'Compra, arrendamento e operação estruturada exigem trilhas documentais, garantias e decisões diferentes.'
            },
            service: {
                title: 'Como ajudamos',
                description: 'Você pode seguir por conta própria com checklist e orientação, ou pedir que coordenemos tudo.'
            }
        },
        stats: {
            cases: 'Primeiro os documentos',
            hectares: 'Depois a diligência',
            experience: 'Só então a operação'
        },
        form: {
            name: 'Nome',
            email: 'Email',
            phone: 'Telefone/WeChat',
            company: 'Empresa',
            interest: 'Interesse',
            interestTypes: {
                land_purchase: 'Compra de Terra',
                lease: 'Arrendamento',
                diligence: 'Due diligence e revisão documental',
                structuring: 'Estruturação e suporte à operação',
                other: 'Outro'
            },
            area: 'Área (hectares)',
            crop: 'Tipo de Cultura',
            crops: {
                soybean: 'Soja',
                corn: 'Milho',
                cotton: 'Algodão',
                multiple: 'Múltiplas'
            },
            message: 'Mensagem',
            submit: 'Enviar Consulta',
            required: 'obrigatório',
            select: 'Selecione',
            success: 'Sua consulta foi enviada! Entraremos em contato em 24-48 horas.',
            error: 'Erro ao enviar. Tente novamente ou nos contate via WeChat.'
        },
        wechat: {
            scan: 'Escaneie o QR code para nos contatar'
        },
        footer: {
            copyright: '© 2024 BRprop. Corretora de Terras Agrícolas Brasileiras'
        }
    }
};

// Translation function
function t(key, lang = null) {
    const currentLang = lang || localStorage.getItem('lang') || 'zh';
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Apply translations to page
function applyTranslations(lang) {
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key, lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'pt-BR';
    
    // Update active language button
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'zh';
    applyTranslations(savedLang);
    
    // Language toggle
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.addEventListener('click', () => {
            applyTranslations(btn.dataset.lang);
        });
    });
});
```

---

## 7. ARQUIVO: scripts/form.js

```javascript
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.messageEl = document.getElementById('form-message');
        
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        this.form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearError(field));
        });
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = '发送中...';
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                this.showMessage(t('form.success'), 'success');
                this.form.reset();
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            this.showMessage(t('form.error'), 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
    
    validateForm() {
        let isValid = true;
        
        this.form.querySelectorAll('[required]').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        if (field.required && !value) {
            isValid = false;
            errorMessage = t('form.required');
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email格式不正确';
            }
        }
        
        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }
        
        return isValid;
    }
    
    showError(field, message) {
        field.classList.add('error');
        
        let errorEl = field.parentElement.querySelector('.field-error');
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            field.parentElement.appendChild(errorEl);
        }
        errorEl.textContent = message;
    }
    
    clearError(field) {
        field.classList.remove('error');
        const errorEl = field.parentElement.querySelector('.field-error');
        if (errorEl) {
            errorEl.remove();
        }
    }
    
    showMessage(text, type) {
        this.messageEl.textContent = text;
        this.messageEl.className = `form-message ${type}`;
        this.messageEl.style.display = 'block';
        
        setTimeout(() => {
            this.messageEl.style.display = 'none';
        }, 5000);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm('contact-form');
});
```

---

## 8. ARQUIVO: scripts/main.js

```javascript
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Load properties (example data)
    loadProperties();
});

// Mock properties data
const properties = [
    {
        id: 1,
        name: 'Fazenda São Jorge',
        location: 'Mato Grosso, Brasil',
        operationType: 'sale',
        documentaryStatus: 'documented',
        area: 2500,
        crop: 'soybean',
        price: 'R$ 45.000.000',
        image: '/assets/images/property-1.jpg',
        badge: '热门'
    },
    {
        id: 2,
        name: 'Sítio Boa Vista',
        location: 'Goiás, Brasil',
        operationType: 'lease',
        documentaryStatus: 'documented',
        area: 1200,
        crop: 'corn',
        price: 'R$ 22.000.000',
        image: '/assets/images/property-2.jpg',
        badge: '新品'
    },
    {
        id: 3,
        name: 'Fazenda Esperança',
        location: 'Bahia, Brasil',
        operationType: 'sale',
        documentaryStatus: 'requires_review',
        area: 5000,
        crop: 'cotton',
        price: 'R$ 78.000.000',
        image: '/assets/images/property-3.jpg',
        badge: '推荐'
    }
];

function loadProperties() {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;
    
    grid.innerHTML = properties.map(property => `
        <article class="property-card">
            <div class="property-image">
                <img src="${property.image}" alt="${property.name}" loading="lazy">
                <span class="property-badge">${property.badge}</span>
            </div>
            <div class="property-content">
                <h3>${property.name}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-features">
                    <span>📌 ${property.operationType === 'sale' ? '出售' : '租赁'}</span>
                    <span>📏 ${property.area} 公顷</span>
                    <span>🌱 ${property.crop === 'soybean' ? '大豆' : property.crop === 'corn' ? '玉米' : '棉花'}</span>
                </div>
                <p class="property-doc-status">
                    ${property.documentaryStatus === 'documented' ? '文件状态：已提供基础登记与 cadastro 信息' : '文件状态：需进一步核查'}
                </p>
                <p class="property-price">${property.price}</p>
                <a href="/property-detail.html?id=${property.id}" class="btn btn-outline">详情 →</a>
            </div>
        </article>
    `).join('');
}
```

---

## 9. PROPRIEDADES: properties.html

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <!-- Same head as index.html -->
    <title>土地项目 - BRprop</title>
</head>
<body>
    <!-- Navbar (same as index.html) -->
    
    <section class="page-header">
        <div class="container">
            <h1>土地项目</h1>
            <p>浏览我们的精选农业用地</p>
        </div>
    </section>
    
    <section class="properties-section">
        <div class="container">
            <!-- Filters -->
            <div class="filters">
                <div class="filter-group">
                    <label>交易类型</label>
                    <select id="operation-filter">
                        <option value="">全部</option>
                        <option value="sale">出售</option>
                        <option value="lease">租赁</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>作物类型</label>
                    <select id="crop-filter">
                        <option value="">全部</option>
                        <option value="soybean">大豆</option>
                        <option value="corn">玉米</option>
                        <option value="cotton">棉花</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>面积范围</label>
                    <select id="area-filter">
                        <option value="">全部</option>
                        <option value="0-1000">0-1000 公顷</option>
                        <option value="1000-5000">1000-5000 公顷</option>
                        <option value="5000+">5000+ 公顷</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>排序</label>
                    <select id="sort-filter">
                        <option value="newest">最新</option>
                        <option value="price-asc">价格从低到高</option>
                        <option value="price-desc">价格从高到低</option>
                        <option value="area-desc">面积从大到小</option>
                    </select>
                </div>
            </div>
            
            <!-- Properties Grid -->
            <div class="properties-grid" id="properties-grid">
                <!-- Filled by JS -->
            </div>
            
            <!-- Pagination -->
            <div class="pagination">
                <button class="btn btn-outline" disabled>← 上一页</button>
                <span class="page-info">1 / 5</span>
                <button class="btn btn-outline">下一页 →</button>
            </div>
        </div>
    </section>
    
    <!-- Footer (same as index.html) -->
    
    <script src="/scripts/main.js"></script>
</body>
</html>
```

---

## 10. PROPRIEDADE: property-detail.html

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>土地详情 - BRprop</title>
</head>
<body>
    <!-- Navbar (same as index.html) -->
    
    <section class="property-detail">
        <div class="container">
            <!-- Gallery -->
            <div class="property-gallery">
                <div class="main-image">
                    <img id="main-image" src="/assets/images/property-placeholder.jpg" alt="Property">
                </div>
                <div class="thumbnail-grid">
                    <img src="/assets/images/thumb-1.jpg" alt="Thumbnail">
                    <img src="/assets/images/thumb-2.jpg" alt="Thumbnail">
                    <img src="/assets/images/thumb-3.jpg" alt="Thumbnail">
                    <img src="/assets/images/thumb-4.jpg" alt="Thumbnail">
                </div>
            </div>
            
            <!-- Info -->
            <div class="property-info">
                <h1 id="property-name">Fazenda São Jorge</h1>
                <p class="property-location" id="property-location">📍 Mato Grosso, Brasil</p>
                <p class="property-operation-type">交易类型：出售</p>
                
                <div class="property-specs">
                    <div class="spec">
                        <span class="spec-label">面积</span>
                        <span class="spec-value" id="property-area">2,500 公顷</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">作物</span>
                        <span class="spec-value" id="property-crop">大豆</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">价格</span>
                        <span class="spec-value" id="property-price">R$ 45.000.000</span>
                    </div>
                </div>

                <div class="property-document-box">
                    <h2>文件与核查摘要</h2>
                    <p>这里应显示 matrícula、ônus、cadastro、占有情况、环境要点和卖方基础文件的摘要。</p>
                </div>
                
                <div class="property-description">
                    <h2>土地描述</h2>
                    <p id="property-desc">
                        此物业位于马托格罗索州，交通便利，土壤肥沃...
                    </p>
                </div>

                <div class="property-caution-box">
                    <h2>重要提醒</h2>
                    <p>如该资产属于 informal、possessory ou ainda não regularizado, o texto deve explicar com delicadeza que isso não equivale a imóvel plenamente documentado, pode não aceitar crédito e pode exigir presença física e verificação reforçada.</p>
                </div>
                
                <!-- Contact CTA -->
                <div class="property-cta">
                    <a href="/contact.html" class="btn btn-primary">立即咨询</a>
                    <div class="wechat-cta">
                        <img src="/assets/qr-codes/wechat-qr.png" alt="WeChat">
                        <p>添加微信咨询</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Similar Properties -->
    <section class="similar-properties">
        <div class="container">
            <h2>相似项目</h2>
            <div class="properties-grid" id="similar-grid">
                <!-- Filled by JS -->
            </div>
        </div>
    </section>
    
    <!-- Footer (same as index.html) -->
    
    <script>
        // Load property details from URL param
        document.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            
            // In real app, fetch from API
            // For now, use mock data
            const property = properties.find(p => p.id === parseInt(id)) || properties[0];
            
            document.getElementById('property-name').textContent = property.name;
            document.getElementById('property-location').textContent = '📍 ' + property.location;
            document.getElementById('property-area').textContent = property.area.toLocaleString() + ' 公顷';
            document.getElementById('property-price').textContent = property.price;
            document.getElementById('main-image').src = property.image;
        });
    </script>
</body>
</html>
```

---

## 10A. KNOWLEDGE: knowledge.html

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>交易指南 - BRprop</title>
</head>
<body>
    <!-- Navbar (same as index.html) -->
    
    <section class="page-header">
        <div class="container">
            <h1>巴西农村地产交易指南</h1>
            <p>给中国买家的实务说明：先理解流程、文件、登记与风险，再进入具体报价。</p>
        </div>
    </section>

    <section class="knowledge-section">
        <div class="container">
            <article class="knowledge-article">
                <h2>步骤一：先确认交易类型</h2>
                <p>明确是购买、arrendamento、合作经营还是结构化安排。不同类型对应不同文件、责任和保障。</p>
            </article>

            <article class="knowledge-article">
                <h2>步骤二：先看文件，再看价格</h2>
                <p>在讨论报价前，先审阅 matrícula、ônus、cadastros、链条、卖方身份与占有情况。</p>
            </article>

            <article class="knowledge-article">
                <h2>步骤三：组织尽职调查</h2>
                <p>说明个人、信用、房地产、登记、环境、运营与物流等不同层次的核查。</p>
            </article>

            <article class="knowledge-article">
                <h2>文件清单</h2>
                <ul>
                    <li>matrícula atualizada</li>
                    <li>certidões e ônus</li>
                    <li>CCIR, CAR e cadastros aplicáveis</li>
                    <li>identificação do vendedor e poderes de representação</li>
                    <li>comprovantes fiscais e informações operacionais relevantes</li>
                </ul>
            </article>

            <article class="knowledge-article caution">
                <h2>关于 informal ou possessory situations 的提醒</h2>
                <p>只有在相关时才说明：informal assets ou situações apenas possessórias não equivalem a imóvel plenamente documentado. Em certos casos não aceitam crédito, podem exigir presença física e aumentam o risco perante terceiros.</p>
            </article>

            <article class="knowledge-article">
                <h2>您可以自己推进，也可以交给我们统筹</h2>
                <p>O texto deve deixar claro que o comprador pode seguir com checklist e apoio pontual, ou pedir que a BRprop coordene a busca documental, as diligências e a organização da operação.</p>
            </article>

            <article class="knowledge-article services-note">
                <h2>关于服务方式</h2>
                <p>Quando fizer sentido, explicar com sobriedade que certas operações podem ser estruturadas com honorários fixos, êxito, mandato ou arranjos especiais, inclusive equity, mas apenas em contextos concretos e nunca como promessa genérica.</p>
            </article>
        </div>
    </section>
</body>
</html>
```

---

## 11. SOBRE: about.html

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>关于我们 - BRprop</title>
</head>
<body>
    <!-- Navbar (same as index.html) -->
    
    <section class="page-header">
        <div class="container">
            <h1>关于我们</h1>
            <p>专业的巴西农业用地经纪团队</p>
        </div>
    </section>
    
    <section class="about-section">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>我们的故事</h2>
                    <p>
                        BRprop成立于2016年，致力于帮助国际投资者在巴西购买优质农业用地。
                        我们团队由经验丰富的农业专家、房地产经纪人和法律顾问组成，
                        为客户提供从看地到交易完成的全方位服务。
                    </p>
                    <p>
                        我们的客户主要来自中国，对巴西农业市场充满信心。
                        我们理解中国投资者的需求，并提供专业的双语服务。
                    </p>
                </div>
                <div class="about-image">
                    <img src="/assets/images/about-team.jpg" alt="BRprop Team">
                </div>
            </div>
            
            <div class="values-grid">
                <div class="value-card">
                    <span class="value-icon">🎯</span>
                    <h3>我们的使命</h3>
                    <p>为投资者连接巴西最优质的农业土地资源</p>
                </div>
                <div class="value-card">
                    <span class="value-icon">💎</span>
                    <h3>我们的价值观</h3>
                    <p>诚信、专业、透明是我们服务的基石</p>
                </div>
                <div class="value-card">
                    <span class="value-icon">🤝</span>
                    <h3>我们的承诺</h3>
                    <p>全程服务，直到交易顺利完成</p>
                </div>
            </div>
            
            <div class="team-section" id="team">
                <h2>我们的团队</h2>
                <div class="team-grid">
                    <div class="team-member">
                        <img src="/assets/images/team-1.jpg" alt="Team Member">
                        <h4>Carlos Silva</h4>
                        <p>创始人 & CEO</p>
                    </div>
                    <div class="team-member">
                        <img src="/assets/images/team-2.jpg" alt="Team Member">
                        <h4>Maria Santos</h4>
                        <p>农业专家</p>
                    </div>
                    <div class="team-member">
                        <img src="/assets/images/team-3.jpg" alt="Team Member">
                        <h4>João Oliveira</h4>
                        <p>法律顾问</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer (same as index.html) -->
</body>
</html>
```

---

## 12. CONTATO: contact.html

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>联系我们 - BRprop</title>
</head>
<body>
    <!-- Navbar (same as index.html) -->
    
    <section class="page-header">
        <div class="container">
            <h1>联系我们</h1>
            <p>准备好开始您的农业投资之旅了吗？</p>
        </div>
    </section>
    
    <section class="contact-page">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info-page">
                    <h2>联系方式</h2>
                    
                    <div class="contact-methods-page">
                        <div class="method-item">
                            <span class="method-icon">💬</span>
                            <div>
                                <h4>WeChat</h4>
                                <p>brprop_com</p>
                            </div>
                        </div>
                        <div class="method-item">
                            <span class="method-icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>contact@brprop.com</p>
                            </div>
                        </div>
                        <div class="method-item">
                            <span class="method-icon">📱</span>
                            <div>
                                <h4>电话</h4>
                                <p>+55 11 99999-9999</p>
                            </div>
                        </div>
                        <div class="method-item">
                            <span class="method-icon">📍</span>
                            <div>
                                <h4>地址</h4>
                                <p>Av. Paulista, 1000<br>São Paulo, SP<br>Brasil</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="wechat-qr-large">
                        <h3>扫描二维码</h3>
                        <img src="/assets/qr-codes/wechat-qr.png" alt="WeChat QR Code">
                        <p>关注我们的微信公众号</p>
                    </div>
                </div>
                
                <div class="contact-form-page">
                    <h2>在线咨询</h2>
                    <!-- Same form as index.html -->
                    <form id="contact-form" class="contact-form" novalidate>
                        <!-- Same fields as index.html -->
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Map Section -->
    <section class="map-section">
        <div class="container">
            <h2>我们的位置</h2>
            <div class="map-placeholder">
                <!-- Embed Google Maps or similar -->
                <p>地图加载中...</p>
            </div>
        </div>
    </section>
    
    <!-- Footer (same as index.html) -->
    
    <script src="/scripts/form.js"></script>
</body>
</html>
```
