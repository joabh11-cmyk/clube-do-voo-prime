# 📑 Índice de Arquivos Principais

Guia rápido dos arquivos mais importantes do projeto.

## 📖 Documentação

| Arquivo | Descrição |
|---------|-----------|
| [README.md](./README.md) | Visão geral do projeto e características |
| [QUICK_START.md](./QUICK_START.md) | Guia rápido para começar em 5 minutos |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Arquitetura, padrões e decisões de design |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Guias de deploy em diferentes plataformas |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Diretrizes para contribuir |
| [userGuide.md](./userGuide.md) | Guia completo do usuário |
| [todo.md](./todo.md) | Lista de funcionalidades e status |

## 🔧 Configuração

| Arquivo | Descrição |
|---------|-----------|
| [package.json](./package.json) | Dependências e scripts do projeto |
| [tsconfig.json](./tsconfig.json) | Configuração do TypeScript |
| [vite.config.ts](./vite.config.ts) | Configuração do Vite (bundler) |
| [drizzle.config.ts](./drizzle.config.ts) | Configuração do Drizzle ORM |
| [components.json](./components.json) | Configuração de componentes shadcn/ui |
| [.env.example](./.env.example) | Template de variáveis de ambiente |
| [.gitignore](./.gitignore) | Arquivos ignorados pelo Git |

## 💻 Frontend (React)

### Páginas Principais
| Arquivo | Descrição |
|---------|-----------|
| [client/src/pages/Home.tsx](./client/src/pages/Home.tsx) | Página inicial |
| [client/src/pages/Customers.tsx](./client/src/pages/Customers.tsx) | Gerenciamento de clientes |
| [client/src/pages/Transactions.tsx](./client/src/pages/Transactions.tsx) | Histórico de transações |
| [client/src/pages/Rewards.tsx](./client/src/pages/Rewards.tsx) | Catálogo de recompensas |
| [client/src/pages/Dashboard.tsx](./client/src/pages/Dashboard.tsx) | Dashboard administrativo |
| [client/src/pages/Analytics.tsx](./client/src/pages/Analytics.tsx) | Análise de dados |
| [client/src/pages/AgencyDashboard.tsx](./client/src/pages/AgencyDashboard.tsx) | Dashboard de agências |

### Componentes
| Arquivo | Descrição |
|---------|-----------|
| [client/src/components/DashboardLayout.tsx](./client/src/components/DashboardLayout.tsx) | Layout principal com sidebar |
| [client/src/components/DashboardLayoutSkeleton.tsx](./client/src/components/DashboardLayoutSkeleton.tsx) | Skeleton de carregamento |
| [client/src/components/ErrorBoundary.tsx](./client/src/components/ErrorBoundary.tsx) | Tratamento de erros |
| [client/src/components/AIChatBox.tsx](./client/src/components/AIChatBox.tsx) | Chat com IA |

### Configuração
| Arquivo | Descrição |
|---------|-----------|
| [client/src/App.tsx](./client/src/App.tsx) | Roteamento principal |
| [client/src/main.tsx](./client/src/main.tsx) | Ponto de entrada |
| [client/src/index.css](./client/src/index.css) | Estilos globais |
| [client/src/lib/trpc.ts](./client/src/lib/trpc.ts) | Cliente tRPC |
| [client/src/const.ts](./client/src/const.ts) | Constantes da aplicação |

## 🖥️ Backend (Express + tRPC)

### Rotas e Lógica
| Arquivo | Descrição |
|---------|-----------|
| [server/routers.ts](./server/routers.ts) | Todas as rotas tRPC (API) |
| [server/db.ts](./server/db.ts) | Funções de banco de dados |
| [server/storage.ts](./server/storage.ts) | Integração com S3 |
| [server/emailNotifications.ts](./server/emailNotifications.ts) | Envio de emails |
| [server/api-docs.ts](./server/api-docs.ts) | Documentação de API |

### Framework Interno
| Arquivo | Descrição |
|---------|-----------|
| [server/_core/index.ts](./server/_core/index.ts) | Inicialização do servidor |
| [server/_core/context.ts](./server/_core/context.ts) | Contexto tRPC |
| [server/_core/trpc.ts](./server/_core/trpc.ts) | Setup tRPC |
| [server/_core/env.ts](./server/_core/env.ts) | Variáveis de ambiente |

## 🗄️ Banco de Dados

| Arquivo | Descrição |
|---------|-----------|
| [drizzle/schema.ts](./drizzle/schema.ts) | Definição de todas as tabelas |
| [drizzle/relations.ts](./drizzle/relations.ts) | Relacionamentos entre tabelas |
| [drizzle/migrations/](./drizzle/migrations/) | Histórico de migrações |

### Tabelas Principais
- **users**: Usuários do sistema
- **customers**: Clientes (B2C, B2B, Agências)
- **transactions**: Histórico de pontos
- **rewards**: Catálogo de recompensas
- **promotions**: Promoções temporais
- **faqs**: Perguntas frequentes
- **terms**: Termos e condições

## 📦 Código Compartilhado

| Arquivo | Descrição |
|---------|-----------|
| [shared/const.ts](./shared/const.ts) | Constantes compartilhadas |
| [shared/types.ts](./shared/types.ts) | Tipos TypeScript compartilhados |

## 🔄 CI/CD

| Arquivo | Descrição |
|---------|-----------|
| [.github/workflows/ci.yml](./.github/workflows/ci.yml) | Pipeline de testes e deploy |

## 📜 Scripts Úteis

| Script | Descrição |
|--------|-----------|
| [seed-faqs.mjs](./seed-faqs.mjs) | Popula FAQs iniciais |
| [seed-rewards.mjs](./seed-rewards.mjs) | Popula recompensas iniciais |
| [seed-redemptions.mjs](./seed-redemptions.mjs) | Popula resgates iniciais |

## 🎯 Fluxo de Desenvolvimento

1. **Começar**: Leia [QUICK_START.md](./QUICK_START.md)
2. **Entender**: Leia [ARCHITECTURE.md](./ARCHITECTURE.md)
3. **Modificar**: Edite arquivos em `client/src/` e `server/`
4. **Testar**: Execute `pnpm dev`
5. **Deploy**: Siga [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔍 Buscar Funcionalidade

### Gerenciamento de Clientes
- Frontend: `client/src/pages/Customers.tsx`
- Backend: `server/routers.ts` (customers.*)
- Schema: `drizzle/schema.ts` (customers table)

### Acúmulo de Pontos
- Frontend: `client/src/pages/Transactions.tsx`
- Backend: `server/routers.ts` (points.*)
- Lógica: `server/db.ts` (calculatePoints*)

### Resgates
- Frontend: `client/src/pages/Rewards.tsx`
- Backend: `server/routers.ts` (rewards.*)
- Schema: `drizzle/schema.ts` (rewards table)

### Analytics
- Frontend: `client/src/pages/Analytics.tsx`
- Backend: `server/routers.ts` (analytics.*)
- Lógica: `server/db.ts` (getStatistics*)

---

**Dica**: Use Ctrl+F (Cmd+F) para buscar arquivos pelo nome neste índice.
