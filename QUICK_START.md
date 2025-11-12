# ⚡ Quick Start - Sistema de Pontos Viaja Mais

Guia rápido para começar a usar o projeto em 5 minutos.

## 1️⃣ Clone e Instale

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/programa_pontos_viagem.git
cd programa_pontos_viagem

# Instale dependências
pnpm install
# ou
npm install
```

## 2️⃣ Configure o Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite .env com suas configurações
# Variáveis obrigatórias:
# - DATABASE_URL (MySQL connection string)
# - JWT_SECRET (qualquer string aleatória)
# - VITE_APP_ID (seu app ID)
# - OAUTH_SERVER_URL (URL do OAuth server)
```

## 3️⃣ Configure o Banco de Dados

```bash
# Execute migrações
pnpm db:push

# (Opcional) Seed com dados de exemplo
pnpm db:seed
```

## 4️⃣ Inicie o Servidor

```bash
# Desenvolvimento
pnpm dev

# Produção
pnpm build
pnpm start
```

Acesse: **http://localhost:3000**

## 🎯 Funcionalidades Principais

### 👥 Gerenciamento de Clientes
- Cadastro de clientes B2C, B2B e Agências
- Busca em tempo real por nome/email
- Filtros por tipo, segmento e nível
- Exportação em CSV

### 💰 Acúmulo de Pontos
- Calculadora interativa
- Taxas diferenciadas por segmento
- 11 tipos de serviço
- Bônus automáticos

### 🎁 Resgates
- Catálogo de recompensas
- Integração WhatsApp
- Histórico de transações

### 📊 Analytics
- Dashboard com métricas
- ROI e rentabilidade
- Relatórios por período

## 📁 Estrutura do Projeto

```
programa_pontos_viagem/
├── client/              # Frontend React
│   ├── src/pages/      # Páginas principais
│   ├── src/components/ # Componentes UI
│   └── index.html
├── server/             # Backend Express + tRPC
│   ├── routers.ts      # APIs
│   └── db.ts           # Banco de dados
├── drizzle/            # Migrações
├── package.json        # Dependências
└── README.md           # Documentação
```

## 🔑 Comandos Úteis

```bash
# Desenvolvimento
pnpm dev              # Inicia dev server
pnpm lint             # Verifica código
pnpm type-check       # Verifica tipos TypeScript

# Banco de dados
pnpm db:push          # Executa migrações
pnpm db:studio        # Abre Drizzle Studio

# Build
pnpm build            # Build para produção
pnpm start            # Inicia servidor de produção

# Testes
pnpm test             # Executa testes
```

## 🚀 Deploy Rápido

### Vercel
```bash
# 1. Push para GitHub
git push origin main

# 2. Conecte no Vercel (vercel.com)
# 3. Configure variáveis de ambiente
# 4. Deploy automático
```

### Heroku
```bash
heroku create seu-app-name
heroku config:set DATABASE_URL=mysql://...
git push heroku main
```

Veja [DEPLOYMENT.md](./DEPLOYMENT.md) para mais opções.

## 🐛 Troubleshooting

### "Cannot find module"
```bash
pnpm install
pnpm store prune
```

### "Database connection failed"
- Verifique `DATABASE_URL` em `.env`
- Confirme que MySQL está rodando
- Teste a conexão: `mysql -u user -p`

### "Port 3000 already in use"
```bash
# Mude a porta
PORT=3001 pnpm dev

# Ou mate o processo
lsof -i :3000 | kill -9
```

## 📚 Próximos Passos

1. **Leia a documentação**
   - [README.md](./README.md) - Visão geral
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura
   - [userGuide.md](./userGuide.md) - Guia do usuário

2. **Explore o código**
   - `client/src/pages/Customers.tsx` - Gerenciamento de clientes
   - `server/routers.ts` - APIs tRPC
   - `drizzle/schema.ts` - Schema do banco

3. **Customize**
   - Cores: `client/src/index.css`
   - Logo: `client/src/const.ts`
   - Banco: `drizzle/schema.ts`

## 💡 Dicas

- Use `pnpm` em vez de `npm` para melhor performance
- Instale a extensão Drizzle Studio para visualizar o banco
- Configure ESLint no seu editor para melhor DX
- Leia o [CONTRIBUTING.md](./CONTRIBUTING.md) antes de fazer PRs

## 🆘 Precisa de Ajuda?

- 📖 Consulte [README.md](./README.md)
- 🏗️ Veja [ARCHITECTURE.md](./ARCHITECTURE.md)
- 🚀 Leia [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🤝 Abra uma issue no GitHub

---

**Pronto para começar? Execute:**
```bash
pnpm install && pnpm dev
```

Boa sorte! 🎉
