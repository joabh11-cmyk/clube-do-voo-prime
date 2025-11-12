# 🎫 Sistema de Pontos Viaja Mais

Um sistema completo de programa de fidelidade para agências de viagem, desenvolvido com **React 19**, **tRPC**, **Express**, **Drizzle ORM** e **MySQL**.

## 📋 Características Principais

### 👥 Gestão de Clientes
- **Três tipos de clientes**: B2C (Lazer), B2B (Corporativo), Agência (Parceiro)
- **Segmentação automática**: Agências sincronizam automaticamente com segmento "agencia"
- **CRUD completo**: Criar, editar, deletar e visualizar clientes
- **Busca em tempo real**: Filtrar por nome ou email instantaneamente
- **Filtros avançados**: Por tipo, segmento e nível de fidelidade
- **Exportação de dados**: CSV com 12 colunas de informações

### 💰 Acúmulo de Pontos
- **Taxas diferenciadas por segmento**:
  - **Lazer**: 0.5 pto/R$ (passagens), 0.75 pto/R$ (pacotes)
  - **Corporativo**: 1.0 pto/R$ (passagens), 1.0 pto/R$ (pacotes)
  - **Agência**: 0.8 pto/R$ (passagens), 1.0 pto/R$ (pacotes)
- **11 tipos de serviço**: Passagens, pacotes, viagens corporativas, etc.
- **Bônus fixos**: Indicações, ações promocionais, aniversários
- **Calculadora interativa**: Simular pontos antes de registrar

### 🎁 Resgates e Recompensas
- **Catálogo de recompensas**: Experiências VIP, descontos, upgrades
- **Integração WhatsApp**: Botão de resgate com link direto
- **Histórico de transações**: Rastreamento completo de movimentações

### 🏆 Níveis de Fidelidade
- **Bronze**: 0-999 pontos (multiplicador 1x)
- **Prata**: 1.000-4.999 pontos (multiplicador 1.5x)
- **Ouro**: 5.000+ pontos (multiplicador 2x)

### 📊 Dashboard Administrativo
- **Visão geral**: Estatísticas de clientes, pontos, receita
- **Analytics**: ROI, lucro adicional, taxa de resgate
- **Relatórios**: Distribuição por nível, tendências mensais
- **Gerenciamento de usuários**: Criar admins, alterar permissões
- **FAQ e Termos**: Gerenciar conteúdo público

### 🏢 Dashboard de Agências
- **Visão específica**: Métricas de desempenho de agências
- **Ranking de agências**: Comparação de performance
- **Gerenciamento de admins**: Criar usuários da agência
- **Relatórios customizados**: Análise de dados por agência

### 🌐 Portal do Cliente
- **Perfil pessoal**: Dados, nível, saldo de pontos
- **Histórico de atividades**: Todas as transações e resgates
- **Recompensas disponíveis**: Catálogo com filtros
- **Promoções ativas**: Ofertas personalizadas por segmento

## 🚀 Tecnologia

### Stack
- **Frontend**: React 19, Tailwind CSS 4, shadcn/ui
- **Backend**: Express 4, tRPC 11, Node.js
- **Database**: MySQL, Drizzle ORM
- **Auth**: Manus OAuth (customizável)
- **Build**: Vite, TypeScript

### Dependências Principais
```json
{
  "react": "^19.0.0",
  "tailwindcss": "^4.0.0",
  "@trpc/react-query": "^11.0.0",
  "drizzle-orm": "^0.28.0",
  "express": "^4.18.0",
  "zod": "^3.22.0"
}
```

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm
- MySQL 8.0+

### Setup Local

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/programa_pontos_viagem.git
cd programa_pontos_viagem
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite .env com suas configurações
```

4. **Configure o banco de dados**
```bash
pnpm db:push
```

5. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📝 Estrutura do Projeto

```
programa_pontos_viagem/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas principais
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/              # Utilitários e hooks
│   │   └── App.tsx           # Roteamento principal
│   └── index.html
├── server/                    # Backend Express + tRPC
│   ├── routers.ts            # Procedimentos tRPC
│   ├── db.ts                 # Helpers de banco de dados
│   ├── storage.ts            # Integração S3
│   └── _core/                # Framework interno
├── drizzle/                   # Migrações e schema
│   ├── schema.ts             # Definição de tabelas
│   └── migrations/           # Histórico de migrações
├── shared/                    # Código compartilhado
│   ├── const.ts              # Constantes
│   └── types.ts              # Tipos TypeScript
└── package.json
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente

**Obrigatórias:**
- `DATABASE_URL`: String de conexão MySQL
- `JWT_SECRET`: Chave para assinar cookies de sessão
- `VITE_APP_ID`: ID da aplicação OAuth
- `OAUTH_SERVER_URL`: URL do servidor OAuth

**Opcionais:**
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`: Para envio de emails
- `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`: Para integração de pagamentos

### Banco de Dados

O projeto usa Drizzle ORM com MySQL. Para adicionar novas tabelas:

1. Edite `drizzle/schema.ts`
2. Execute `pnpm db:push`
3. Crie helpers em `server/db.ts`
4. Implemente rotas tRPC em `server/routers.ts`

### Autenticação

O sistema suporta:
- **OAuth Manus**: Integração nativa
- **Autenticação por senha**: Com hash bcrypt (customizável)
- **Roles**: admin, user

## 📚 Documentação

- **[User Guide](./userGuide.md)**: Guia completo de uso
- **[TODO List](./todo.md)**: Funcionalidades e status
- **[API Docs](./server/api-docs.ts)**: Documentação de endpoints

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Consulte a documentação em `userGuide.md`
- Verifique o arquivo `todo.md` para status das funcionalidades

## 🎯 Roadmap

- [ ] Integração com APIs de companhias aéreas
- [ ] Mobile app (React Native)
- [ ] Sistema de recomendação com IA
- [ ] Relatórios avançados com BI
- [ ] Multi-idioma (EN, ES, PT)
- [ ] Webhooks para eventos

---

**Desenvolvido com ❤️ para agências de viagem**
