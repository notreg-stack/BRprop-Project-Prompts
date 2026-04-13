# PROMPT: Backend Server - Node.js + Express + API

## Objetivo
Criar o backend do BRprop com Node.js/Express para processar formulários e enviar emails.

---

## 1. ESTRUTURA DE ARQUIVOS

```
server/
├── index.js              # Entry point
├── package.json
├── routes/
│   └── contact.js        # Contact form routes
├── services/
│   ├── email.js          # Email service
│   └── storage.js        # File storage (optional)
├── middleware/
│   ├── validation.js      # Request validation
│   └── rateLimit.js      # Rate limiting
└── utils/
    └── logger.js         # Logging utility
```

---

## 2. ARQUIVO: server/package.json

```json
{
  "name": "brprop-server",
  "version": "1.0.0",
  "description": "BRprop Backend API",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "zod": "^3.22.4"
  }
}
```

---

## 3. ARQUIVO: server/index.js

```javascript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { contactRouter } from './routes/contact.js';
import { logger } from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || '*'
}));

// Parse JSON bodies
app.use(express.json());

// Request logging
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`, {
        ip: req.ip,
        userAgent: req.get('user-agent')
    });
    next();
});

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { error: '太多请求，请稍后再试' }
});
app.use('/api/', limiter);

// Routes
app.use('/api/contact', contactRouter);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ 
        error: '服务器错误',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: '页面未找到' });
});

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
```

---

## 4. ARQUIVO: server/routes/contact.js

```javascript
import express from 'express';
import { z } from 'zod';
import { sendContactEmail, sendAutoReply } from '../services/email.js';
import { validateBody } from '../middleware/validation.js';

export const contactRouter = express.Router();

// Validation schema
const contactSchema = z.object({
    name: z.string().min(1, '姓名不能为空').max(100),
    email: z.string().email('邮箱格式不正确'),
    phone: z.string().optional(),
    company: z.string().optional(),
    interest: z.enum(['land_purchase', 'investment', 'consulting', 'other']),
    area: z.string().optional(),
    crop: z.enum(['soybean', 'corn', 'cotton', 'multiple']).optional(),
    message: z.string().max(1000).optional()
});

// POST /api/contact
contactRouter.post('/', validateBody(contactSchema), async (req, res) => {
    try {
        const { name, email, phone, company, interest, area, crop, message } = req.body;
        
        // Interest type mapping
        const interestLabels = {
            land_purchase: '土地购买',
            investment: '投资合作',
            consulting: '咨询服务',
            other: '其他'
        };
        
        const cropLabels = {
            soybean: '大豆',
            corn: '玉米',
            cotton: '棉花',
            multiple: '多种作物'
        };
        
        // Prepare data for email
        const contactData = {
            name,
            email,
            phone: phone || '未提供',
            company: company || '未提供',
            interest: interestLabels[interest] || interest,
            area: area ? `${area} 公顷` : '未指定',
            crop: crop ? cropLabels[crop] : '未指定',
            message: message || '无',
            timestamp: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
        };
        
        // Send notification to broker
        await sendContactEmail(contactData);
        
        // Send auto-reply to client
        await sendAutoReply({
            to: email,
            name
        });
        
        logger.info(`Contact form submitted: ${name} <${email}>`);
        
        res.json({ 
            success: true, 
            message: '咨询已发送成功！'
        });
        
    } catch (error) {
        logger.error('Contact form error:', error);
        res.status(500).json({ 
            error: '发送失败，请稍后重试' 
        });
    }
});
```

---

## 5. ARQUIVO: server/services/email.js

```javascript
import nodemailer from 'nodemailer';
import { logger } from '../utils/logger.js';

// Create transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'sendgrid',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_API_KEY
    }
});

// Interest type mapping
const interestLabels = {
    land_purchase: '土地购买',
    investment: '投资合作',
    consulting: '咨询服务',
    other: '其他'
};

const cropLabels = {
    soybean: '大豆',
    corn: '玉米',
    cotton: '棉花',
    multiple: '多种作物'
};

/**
 * Send notification email to broker
 */
export async function sendContactEmail(data) {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1B5E20; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; }
        .value { margin-left: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌱 BRprop - 新客户咨询</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">姓名:</span>
                <span class="value">${data.name}</span>
            </div>
            <div class="field">
                <span class="label">邮箱:</span>
                <span class="value">${data.email}</span>
            </div>
            <div class="field">
                <span class="label">电话/微信:</span>
                <span class="value">${data.phone}</span>
            </div>
            <div class="field">
                <span class="label">公司:</span>
                <span class="value">${data.company}</span>
            </div>
            <div class="field">
                <span class="label">感兴趣:</span>
                <span class="value">${data.interest}</span>
            </div>
            <div class="field">
                <span class="label">土地面积:</span>
                <span class="value">${data.area}</span>
            </div>
            <div class="field">
                <span class="label">作物类型:</span>
                <span class="value">${data.crop}</span>
            </div>
            <div class="field">
                <span class="label">留言:</span>
                <span class="value">${data.message}</span>
            </div>
            <div class="field">
                <span class="label">时间:</span>
                <span class="value">${data.timestamp}</span>
            </div>
        </div>
        <div class="footer">
            <p>此邮件由 BRprop 网站自动发送</p>
            <p>回复此邮件可直接联系客户</p>
        </div>
    </div>
</body>
</html>
    `;
    
    const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@brprop.com',
        to: process.env.EMAIL_TO,
        subject: `[BRprop] 新咨询 - ${data.name}`,
        html: htmlContent
    };
    
    try {
        const info = await transporter.sendMail(mailOptions);
        logger.info(`Email sent: ${info.messageId}`);
        return info;
    } catch (error) {
        logger.error('Email send error:', error);
        throw error;
    }
}

/**
 * Send auto-reply to client
 */
export async function sendAutoReply({ to, name }) {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1B5E20; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .wechat { text-align: center; margin: 20px 0; }
        .wechat img { max-width: 150px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌱 感谢您的咨询！</h1>
        </div>
        <div class="content">
            <p>亲爱的 <strong>${name}</strong>：</p>
            
            <p>感谢您关注 BRprop！</p>
            
            <p>我们已收到您的咨询，将会在 <strong>24-48 小时</strong> 内与您联系。</p>
            
            <p>如有紧急需要，请通过以下方式联系我们：</p>
            
            <ul>
                <li>📧 邮箱: contact@brprop.com</li>
                <li>💬 微信: brprop_com</li>
            </ul>
            
            <div class="wechat">
                <p><strong>扫描二维码添加微信</strong></p>
                <img src="cid:wechat-qr" alt="WeChat QR Code">
            </div>
            
            <p>祝好！</p>
            <p>BRprop 团队</p>
        </div>
        <div class="footer">
            <p>© 2024 BRprop - 巴西农村地产专家</p>
        </div>
    </div>
</body>
</html>
    `;
    
    const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@brprop.com',
        to: to,
        subject: '感谢您的咨询 - BRprop',
        html: htmlContent,
        attachments: [{
            filename: 'wechat-qr.png',
            path: './assets/qr-codes/wechat-qr.png',
            cid: 'wechat-qr'
        }]
    };
    
    try {
        const info = await transporter.sendMail(mailOptions);
        logger.info(`Auto-reply sent to: ${to}`);
        return info;
    } catch (error) {
        logger.error('Auto-reply error:', error);
        // Don't throw - auto-reply failure shouldn't block the main flow
    }
}
```

---

## 6. ARQUIVO: server/middleware/validation.js

```javascript
import { ZodError } from 'zod';

/**
 * Middleware to validate request body against a Zod schema
 */
export function validateBody(schema) {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errors = error.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }));
                return res.status(400).json({
                    error: '验证失败',
                    details: errors
                });
            }
            next(error);
        }
    };
}
```

---

## 7. ARQUIVO: server/middleware/rateLimit.js

```javascript
import rateLimit from 'express-rate-limit';

/**
 * Rate limiter for contact form
 * More strict than the general limiter
 */
export const contactRateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 submissions per hour per IP
    message: {
        error: '提交次数过多，请稍后再试',
        retryAfter: '1小时'
    },
    standardHeaders: true,
    legacyHeaders: false
});
```

---

## 8. ARQUIVO: server/utils/logger.js

```javascript
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
};

function log(level, message, meta = {}) {
    if (levels[level] <= levels[LOG_LEVEL]) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            ...meta
        };
        
        if (process.env.NODE_ENV === 'production') {
            // JSON logging for production
            console.log(JSON.stringify(logEntry));
        } else {
            // Pretty logging for development
            console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`, 
                Object.keys(meta).length ? meta : ''
            );
        }
    }
}

export const logger = {
    error: (message, meta) => log('error', message, meta),
    warn: (message, meta) => log('warn', message, meta),
    info: (message, meta) => log('info', message, meta),
    debug: (message, meta) => log('debug', message, meta)
};
```

---

## 9. CONFIG: .env.example

```bash
# Environment
NODE_ENV=production
PORT=3000

# Email (SendGrid)
EMAIL_SERVICE=sendgrid
EMAIL_USER=apikey
EMAIL_API_KEY=SG.your_sendgrid_api_key_here
EMAIL_FROM=noreply@brprop.com
EMAIL_TO=your-email@domain.com

# Security
ALLOWED_ORIGIN=https://brprop.com

# Logging
LOG_LEVEL=info
```

---

## 10. INSTALAÇÃO E EXECUÇÃO

```bash
# Entrar no diretório do servidor
cd server

# Instalar dependências
npm install

# Copiar e editar variáveis de ambiente
cp .env.example .env
nano .env  # Edite com suas credenciais

# Executar em desenvolvimento
npm run dev

# Executar em produção
npm start
```

---

## 11. TESTES

### Testar health endpoint
```bash
curl http://localhost:3000/health
```

### Testar contact endpoint
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "张三",
    "email": "zhangsan@example.com",
    "interest": "land_purchase",
    "area": "5000",
    "crop": "soybean"
  }'
```

### Resposta esperada (sucesso)
```json
{
  "success": true,
  "message": "咨询已发送成功！"
}
```

### Resposta esperada (erro de validação)
```json
{
  "error": "验证失败",
  "details": [
    {
      "field": "email",
      "message": "邮箱格式不正确"
    }
  ]
}
```

---

## 12. PROVEDORES DE EMAIL RECOMENDADOS

| Provedor | Grátis | Limite | Observações |
|----------|--------|--------|-------------|
| **SendGrid** | Sim | 100 emails/dia | Melhor para produção |
| **Mailgun** | Sim | 5000/mês | Bom para alto volume |
| **Resend** | Sim | 100/day | Moderno, API simples |
| **SMTP Gmail** | Sim | 500/day | Limitado, não recomendado para produção |

### SendGrid Setup (Recomendado)

```bash
# 1. Criar conta em sendgrid.com
# 2. Settings → API Keys → Create API Key
# 3. Copiar a chave gerada

# No .env:
EMAIL_SERVICE=sendgrid
EMAIL_USER=apikey
EMAIL_API_KEY=SG.your_key_here
```

### Resend Setup (Alternativa Moderna)

```javascript
// Instalar
npm install resend

// No email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
    from: 'BRprop <noreply@brprop.com>',
    to: [data.email],
    subject: '感谢您的咨询',
    html: htmlContent
});
```
