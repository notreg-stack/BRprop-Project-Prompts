# SEO China Stack for BRprop

## O que foi instalado

### Skills

- `ai-seo`
  - Origem: `coreyhaines31/marketingskills@ai-seo`
  - Motivo: cobertura forte para AI-search, answer engines e SEO moderno
- `seo-geo`
  - Origem: `resciencelab/opc-skills@seo-geo`
  - Motivo: foco em GEO, citações, estrutura de conteúdo e discoverability
- `geo-content-optimizer`
  - Origem: `aaron-he-zhu/seo-geo-claude-skills@geo-content-optimizer`
  - Motivo: reforço tático para páginas orientadas a AI answers

### MCPs baixados localmente

- `mcp-search-console`
  - Pacote: `mcp-search-console`
  - Motivo: Search Console para indexação, sitemaps, performance e inspeção
- `analytics-mcp`
  - Pacote: `analytics-mcp`
  - Motivo: medir comportamento, landing performance e efeito do conteúdo

## O que eu nao ativei ainda

Eu nao conectei esses MCPs no `~/.codex/config.toml` ainda porque eles exigem credenciais reais:

- Google Search Console API
- Google Analytics API

Se eu ativasse sem isso, o ambiente poderia subir quebrado ou com erros de autenticação logo na inicialização.

## MCPs que ja fazem parte do stack e continuam valendo

- `firecrawl`
  - melhor para pesquisa de SERP, concorrentes, extração de conteúdo e comparação de páginas
- `playwright`
  - melhor para validar renderização, indexabilidade visual, navegação e problemas de carregamento
- `plur`
  - memória operacional para ir acumulando padrões de SEO e GEO do projeto

## Prioridade real para aparecer nas buscas chinesas

O principal gargalo para China nao é "mais ferramenta". É:

1. conteúdo útil em chinês simplificado
2. páginas estáticas e fáceis de rastrear
3. envio e descoberta rápida por buscadores
4. sinais claros de entidade, autoria, atualização e fonte
5. performance e compatibilidade móvel

## O que as fontes oficiais indicam

### Baidu Search Resource Platform

- O Baidu indica que `链接提交` e `主动推送` ajudam a reduzir o tempo até descoberta e indexação.
  - Fonte oficial: <https://ziyuan.baidu.com/wiki/522>
- O Baidu também enfatiza `Mobile Friendly` e experiência em dispositivos móveis como fator importante de navegação e busca móvel.
  - Fonte oficial: <https://ziyuan.baidu.com/wiki/774>
- O Baidu suporta sites em `HTTPS` dentro da plataforma de recursos de busca.
  - Fonte oficial: <https://ziyuan.baidu.com/wiki/494>

### IndexNow

- Para mecanismos compatíveis, o IndexNow acelera descoberta de URLs novas e atualizadas.
  - Fonte oficial: <https://www.indexnow.org/documentation>

## Inferencia pratica para IAs chinesas

Nao encontrei documentacao oficial forte o bastante de webmaster tooling para DeepSeek, Kimi, Doubao ou Qwen equivalente ao Baidu Search Resource Platform. Entao a estrategia correta aqui e:

- tratar isso como um problema de discoverability web e content quality
- publicar páginas fonte claras e citáveis
- estruturar conteúdo em chinês com perguntas, respostas, glossário, datas e fontes
- manter HTML legível, sem esconder o conteúdo principal em JS pesado

Isso aumenta a chance de:

- aparecer em buscas chinesas tradicionais
- virar fonte para respostas de AI search e assistentes que fazem web retrieval

## O que eu faria agora no BRprop

### Lote 1

1. criar `sitemap.xml`
2. revisar `robots.txt` para permitir rastreamento útil
3. criar páginas editoriais em chinês simplificado para:
   - compra de imóvel rural por estrangeiro no Brasil
   - due diligence documental
   - registro de imóveis no Brasil
   - cartórios e escritura
   - tokenização e riscos
   - soja, milho, algodão, safrinha e regiões produtoras
4. colocar data de atualização, fontes e autoria em cada página
5. manter assets locais e sem dependência crítica de Google

### Lote 2

1. conectar o site ao Baidu Search Resource Platform
2. submeter sitemap e configurar link submission / active push
3. conectar Search Console MCP
4. conectar Analytics MCP
5. medir:
   - páginas descobertas
   - páginas indexadas
   - queries em chinês
   - CTR
   - páginas que levam ao WeChat

## Snippets para ativar os MCPs depois

### Search Console

```toml
[mcp_servers.search_console]
command = "/Users/murillo/.local/bin/mcp-search-console"
env = { GSC_OAUTH_CLIENT_SECRETS_FILE = "/CAMINHO/client_secrets.json" }
```

### Analytics

```toml
[mcp_servers.analytics_mcp]
command = "/Users/murillo/.local/bin/analytics-mcp"
env = { GOOGLE_APPLICATION_CREDENTIALS = "/CAMINHO/adc.json", GOOGLE_PROJECT_ID = "SEU_PROJETO" }
```

## Ordem recomendada de uso das skills

1. `seo-geo`
   - para desenhar o mapa de presença em busca e AI answers
2. `ai-seo`
   - para revisar discoverability em mecanismos com resposta gerada
3. `geo-content-optimizer`
   - para melhorar as páginas editoriais em chinês
4. skills já existentes no ambiente:
   - `humanize-chinese`
   - `fixing-metadata`
   - `seo-aeo-schema-generator`
   - `seo-aeo-keyword-research`
   - `seo-aeo-content-cluster`
   - `seo-audit`

## Regra importante para este projeto

Para BRprop focado na China continental:

- nao depender de assets críticos do Google
- nao esconder o conteúdo principal atrás de UI complexa
- priorizar páginas informativas fortes e citáveis
- usar a home para conversão e o hub editorial para autoridade
