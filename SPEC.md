# BRprop China-Ready Specification

## Objective

BRprop is a bilingual lead-generation website for Chinese buyers and investors interested in Brazilian rural property, crop production, and agricultural partnerships. The project combines a static multi-page site with a lightweight Node/Express API for contact intake.

## Audience

- Chinese investors evaluating Brazilian farmland exposure
- Chinese grain importers researching soybean, corn, and cotton regions
- Buyers who need legal and operational context before opening a conversation
- Portuguese-speaking internal operators who need a fallback locale

## Product Scope

### Public pages

- `index.html`: positioning, trust signals, featured regions, quick contact, and a direct route to WeChat
- `properties.html`: searchable rural property inventory with room for sale and lease listings
- `property-detail.html`: property overview by slug
- `knowledge.html`: China-focused knowledge center
- `article.html`: article detail page
- `about.html`: team, process, cross-border support
- `contact.html`: full lead intake page

### Knowledge center topics

- foreign acquisition of Brazilian rural properties
- registry and notarial systems in Brazil
- land documentation and due diligence
- step-by-step purchase workflow for rural properties in Brazil
- document checklist before offer, contract, and closing
- personal, credit, real-estate, registry, and operational due diligence layers
- caution about informal or merely possessory situations that are not equivalent to fully documented rural assets
- tokenization innovations and risk boundaries
- soy, corn, cotton, and crop rotation context
- harvest and second-crop calendars
- soybean regions, logistics, and productivity notes

## Editorial and Trust Rules

- the tone must feel practical, mature, calm, and highly specific
- the reader should feel guided by an experienced cross-border real-estate and notarial desk, not by a marketing funnel
- do not promise legal outcomes, title certainty, financing approval, or regulatory approval
- do not treat all rural opportunities as equivalent; documented and registrable assets are materially different from informal or merely factual possession situations
- explain what the buyer can do alone and what BRprop can coordinate end-to-end if preferred
- when mentioning services, allow space for documentary search, personal due diligence, credit review, real-estate review, registry review, and transaction structuring
- fee models such as success fee or equity participation should appear only where context makes them credible and useful, never as a headline gimmick
- content should always prefer precision over persuasion

## China-Readiness Constraints

The original prompts were adjusted to support reliable access from mainland China:

- no Google Fonts, Google Maps, YouTube embeds, or other commonly degraded dependencies
- no Cloudflare-only assumptions in the runtime design
- all critical assets are local and can be served directly from Alibaba-hosted infrastructure
- static HTML remains the default delivery model for predictable performance
- the primary language is Simplified Chinese, with Portuguese fallback
- contact pathways prioritize WeChat and email rather than WhatsApp

## Architecture

```text
Browser
  -> Alibaba Cloud / Nginx static delivery
  -> Express contact API
  -> SMTP or transactional email provider
```

### Static delivery

- source files live in `src/`
- `npm run build` copies `src/` into `dist/`
- Nginx serves `dist/` and proxies `/api/*` to Node

### Contact backend

- `server/index.js` boots Express
- `server/routes/contact.js` accepts validated leads
- `server/services/email.js` sends broker notification and Chinese auto-reply
- rate limiting and request validation are enabled by default

## Content Model

### Property inventory

Each property record should support:

- slug
- title in Chinese and Portuguese
- operation type: sale, lease, partnership, or mixed
- state and municipality
- hectares
- crops
- logistics notes
- compliance notes
- documentary status summary
- caution label when the asset is informal, possessory, or still depends on documentary regularization
- featured image

### Knowledge articles

Each article should support:

- slug
- category
- audience
- Chinese and Portuguese titles
- Chinese and Portuguese summary
- long-form body in both languages
- disclosure and caution notes where legal interpretation is involved
- step lists and document checklists where the topic benefits from them
- clear separation between educational content and transaction-specific advice

## Layout Hold Point

The implementation intentionally stops short of a final visual layout system. The goal of this batch is to deliver:

- a working structure
- real content for the Chinese audience
- working navigation and API plumbing
- deployable artifacts

Before a final visual pass, the next step is to choose and apply a dedicated layout/design workflow. That step will be documented separately for the user before any high-fidelity layout work is started.

## Deliverables For This Batch

- project skeleton and scripts
- frontend scaffold with bilingual content
- backend API and email workflow
- Alibaba/Nginx/Docker/PM2 support files
- WeChat setup notes and placeholders
- deployment guide and execution report
