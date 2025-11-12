# 🏗️ Arquitetura do Sistema

Documento descrevendo a arquitetura, padrões e decisões de design do Sistema de Pontos Viaja Mais.

## Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    Cliente (React 19)                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Pages (Customers, Dashboard, etc)                   │   │
│  │  Components (UI, Forms, Tables)                      │   │
│  │  Hooks (useAuth, useQuery, useMutation)              │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓ tRPC
┌─────────────────────────────────────────────────────────────┐
│                  API (Express + tRPC)                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Routers (customers, transactions, rewards, etc)     │   │
│  │  Procedures (create, read, update, delete)           │   │
│  │  Middleware (auth, validation)                       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓ SQL
┌─────────────────────────────────────────────────────────────┐
│              Banco de Dados (MySQL + Drizzle)               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Tables (users, customers, transactions, etc)        │   │
│  │  Migrations (Schema versioning)                      │   │
│  │  Indexes (Performance optimization)                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Padrões de Arquitetura

### 1. tRPC (Type-Safe RPC)

**Benefícios:**
- Type safety end-to-end (frontend ↔ backend)
- Zero runtime validation overhead
- Automatic code generation
- Built-in error handling

**Estrutura:**
```typescript
// server/routers.ts
export const appRouter = router({
  customers: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return db.getCustomers();
    }),
    create: protectedProcedure
      .input(z.object({ name: z.string() }))
      .mutation(async ({ input, ctx }) => {
        return db.createCustomer(input);
      }),
  }),
});

// client/src/pages/Customers.tsx
const { data } = trpc.customers.list.useQuery();
const createMutation = trpc.customers.create.useMutation();
```

### 2. Drizzle ORM

**Características:**
- Type-safe SQL queries
- Automatic migrations
- Zero runtime overhead
- Full TypeScript support

**Exemplo:**
```typescript
// drizzle/schema.ts
export const customers = mysqlTable('customers', {
  id: int().primaryKey().autoincrement(),
  name: varchar(255).notNull(),
  email: varchar(255).notNull().unique(),
  segment: varchar(50).notNull(),
});

// server/db.ts
export async function getCustomers() {
  const db = await getDb();
  return db.select().from(customers);
}
```

### 3. React Hooks + Context

**Padrões:**
- `useAuth()`: Gerencia estado de autenticação
- `useQuery()`: Busca dados do servidor
- `useMutation()`: Modifica dados no servidor
- Custom hooks para lógica reutilizável

**Exemplo:**
```typescript
export function useCustomers() {
  const { data, isLoading } = trpc.customers.list.useQuery();
  const createMutation = trpc.customers.create.useMutation();
  
  return { customers: data, isLoading, create: createMutation };
}
```

## Estrutura de Dados

### Modelo de Clientes

```typescript
interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  customerType: 'b2c' | 'b2b' | 'agencia';
  segment: 'lazer' | 'corporativo' | 'agencia';
  loyaltyTier: 'bronze' | 'prata' | 'ouro';
  totalPointsEarned: number;
  totalPointsRedeemed: number;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Modelo de Transações

```typescript
interface Transaction {
  id: number;
  customerId: number;
  type: 'earn' | 'redeem';
  points: number;
  value: number;
  serviceType?: string;
  description?: string;
  createdAt: Date;
}
```

### Modelo de Recompensas

```typescript
interface Reward {
  id: number;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  imageUrl?: string;
  availableQuantity?: number;
  createdAt: Date;
}
```

## Fluxos Principais

### 1. Cadastro de Cliente

```
Frontend (Form)
    ↓
Validação (Zod)
    ↓
tRPC Mutation (customers.create)
    ↓
Backend Validation
    ↓
Database Insert
    ↓
Response com dados criados
    ↓
Frontend Update (UI + Cache)
```

### 2. Acúmulo de Pontos

```
Frontend (Calculadora)
    ↓
Seleciona: Cliente, Segmento, Tipo de Serviço, Valor
    ↓
tRPC Query (points.calculatePoints)
    ↓
Backend Calculation:
  - Busca taxa base por segmento/serviço
  - Aplica multiplicador por nível
  - Adiciona bônus fixos
    ↓
Retorna detalhes do cálculo
    ↓
Frontend exibe preview
    ↓
Usuário clica "Registrar"
    ↓
tRPC Mutation (points.accrue)
    ↓
Backend cria transação + atualiza saldo
    ↓
Frontend atualiza cache
```

### 3. Resgate de Recompensa

```
Frontend (Catálogo)
    ↓
Usuário seleciona recompensa
    ↓
Valida: pontos suficientes? Disponível?
    ↓
Abre link WhatsApp
    ↓
Usuário confirma por WhatsApp
    ↓
Admin processa manualmente (ou automático)
    ↓
tRPC Mutation (rewards.redeem)
    ↓
Backend:
  - Deduz pontos
  - Cria transação
  - Atualiza nível se necessário
  - Envia notificação
    ↓
Frontend atualiza saldo
```

## Segurança

### Autenticação

1. **OAuth Manus**: Integração nativa com Manus OAuth
2. **Session Cookies**: JWT assinado com `JWT_SECRET`
3. **Protected Procedures**: Apenas usuários autenticados

```typescript
export const protectedProcedure = baseProcedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx });
});
```

### Autorização

- **Roles**: admin, user
- **Admin-only procedures**: Verificam `ctx.user.role === 'admin'`
- **Data isolation**: Usuários veem apenas seus próprios dados

```typescript
export const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return next({ ctx });
});
```

### Validação

- **Zod schemas**: Validação de entrada em todas as rotas
- **Type safety**: TypeScript garante tipos corretos
- **SQL injection prevention**: Drizzle ORM usa prepared statements

## Performance

### Otimizações

1. **Database Indexes**: Colunas frequentemente consultadas
2. **Query Optimization**: Uso de joins eficientes
3. **Caching**: tRPC query cache automático
4. **Lazy Loading**: Componentes carregam sob demanda
5. **Code Splitting**: Vite divide bundle automaticamente

### Monitoramento

```typescript
// Adicione logging para queries lentas
const startTime = Date.now();
const result = await db.query();
const duration = Date.now() - startTime;
if (duration > 1000) {
  console.warn(`Slow query: ${duration}ms`);
}
```

## Decisões de Design

### 1. Por que tRPC?

- Type safety end-to-end
- Reduz boilerplate de API
- Melhor developer experience
- Integração perfeita com React

### 2. Por que Drizzle ORM?

- Zero runtime overhead
- Type-safe queries
- Migrações automáticas
- Suporta múltiplos bancos

### 3. Por que Tailwind CSS?

- Utility-first approach
- Rápido para prototipagem
- Fácil customização
- Excelente documentação

### 4. Por que MySQL?

- Maduro e confiável
- Excelente performance
- Amplo suporte
- Fácil de escalar

## Extensibilidade

### Adicionar Nova Funcionalidade

1. **Defina o schema** em `drizzle/schema.ts`
2. **Crie helpers** em `server/db.ts`
3. **Implemente rotas** em `server/routers.ts`
4. **Crie componentes** em `client/src/pages/`
5. **Registre rota** em `client/src/App.tsx`

### Exemplo: Nova Entidade "Cupom"

```typescript
// 1. Schema
export const coupons = mysqlTable('coupons', {
  id: int().primaryKey().autoincrement(),
  code: varchar(50).notNull().unique(),
  discount: int().notNull(),
});

// 2. Helpers
export async function getCoupons() {
  return db.select().from(coupons);
}

// 3. Routes
coupons: router({
  list: publicProcedure.query(() => db.getCoupons()),
  validate: publicProcedure
    .input(z.object({ code: z.string() }))
    .query(({ input }) => db.validateCoupon(input.code)),
}),

// 4. Component
export function CouponValidator() {
  const { data: coupon } = trpc.coupons.validate.useQuery({ code });
  return <div>{coupon?.discount}% off</div>;
}
```

## Deployment

Veja [DEPLOYMENT.md](./DEPLOYMENT.md) para instruções detalhadas de deploy.

---

Para dúvidas sobre arquitetura, abra uma issue ou consulte a documentação.
