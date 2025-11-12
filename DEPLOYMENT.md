# 🚀 Guia de Deployment

Este documento descreve como fazer deploy do Sistema de Pontos Viaja Mais em diferentes ambientes.

## Pré-requisitos

- Node.js 18+
- pnpm ou npm
- MySQL 8.0+
- Conta em um provedor de hosting (Vercel, Heroku, AWS, etc.)

## Deploy Local

### 1. Preparação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/programa_pontos_viagem.git
cd programa_pontos_viagem

# Instale dependências
pnpm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações
```

### 2. Setup do Banco de Dados

```bash
# Execute migrações
pnpm db:push

# (Opcional) Seed com dados iniciais
pnpm db:seed
```

### 3. Build e Execução

```bash
# Build para produção
pnpm build

# Inicie o servidor
pnpm start
```

## Deploy em Vercel

### 1. Prepare o Repositório

```bash
# Certifique-se de que o projeto está no GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. Conecte ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório
4. Configure as variáveis de ambiente
5. Clique em "Deploy"

### 3. Configure Variáveis de Ambiente

No painel do Vercel, adicione todas as variáveis de `.env.example`:

```
DATABASE_URL=mysql://...
JWT_SECRET=...
VITE_APP_ID=...
OAUTH_SERVER_URL=...
# ... outras variáveis
```

## Deploy em Heroku

### 1. Prepare o Projeto

```bash
# Instale Heroku CLI
npm install -g heroku

# Faça login
heroku login

# Crie uma app
heroku create seu-app-name
```

### 2. Configure o Banco de Dados

```bash
# Adicione MySQL (JawsDB recomendado)
heroku addons:create jawsdb:kitefin

# Obtenha a URL de conexão
heroku config:get JAWSDB_URL
```

### 3. Configure Variáveis de Ambiente

```bash
heroku config:set DATABASE_URL=mysql://...
heroku config:set JWT_SECRET=...
heroku config:set VITE_APP_ID=...
# ... outras variáveis
```

### 4. Deploy

```bash
# Push para Heroku
git push heroku main

# Execute migrações
heroku run pnpm db:push
```

## Deploy em AWS

### 1. EC2 Setup

```bash
# Conecte via SSH
ssh -i seu-key.pem ec2-user@seu-instance-ip

# Instale Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instale pnpm
npm install -g pnpm

# Clone o repositório
git clone https://github.com/seu-usuario/programa_pontos_viagem.git
cd programa_pontos_viagem
```

### 2. Configure o Banco de Dados

```bash
# Use RDS MySQL
# Configure DATABASE_URL com endpoint do RDS
```

### 3. Setup de Produção

```bash
# Instale dependências
pnpm install

# Build
pnpm build

# Use PM2 para gerenciar o processo
npm install -g pm2
pm2 start "pnpm start" --name "pontos-viagem"
pm2 startup
pm2 save
```

### 4. Configure Nginx (Reverse Proxy)

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Deploy com Docker

### 1. Crie Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

### 2. Crie docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: mysql://user:password@db:3306/pontos
      JWT_SECRET: ${JWT_SECRET}
      # ... outras variáveis
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: pontos
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

### 3. Deploy

```bash
docker-compose up -d
```

## Monitoramento em Produção

### Logs

```bash
# Heroku
heroku logs --tail

# PM2
pm2 logs pontos-viagem

# Docker
docker-compose logs -f app
```

### Health Check

Adicione um endpoint de health check:

```typescript
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});
```

### Backup do Banco de Dados

```bash
# MySQL Dump
mysqldump -u user -p database > backup.sql

# Restaurar
mysql -u user -p database < backup.sql
```

## Troubleshooting

### Erro: "Database connection failed"
- Verifique `DATABASE_URL`
- Confirme que o banco está acessível
- Verifique firewall/security groups

### Erro: "Cannot find module"
- Execute `pnpm install`
- Limpe cache: `pnpm store prune`

### Erro: "Port already in use"
- Mude a porta: `PORT=3001 pnpm start`
- Ou mate o processo: `lsof -i :3000 | kill -9`

## Performance

### Otimizações Recomendadas

1. **Compressão**: Ative gzip no servidor
2. **Cache**: Configure cache headers para assets estáticos
3. **CDN**: Use CloudFlare ou similar
4. **Database**: Adicione índices nas colunas frequentemente consultadas
5. **Monitoring**: Configure alertas para erros e performance

## Segurança

- ✅ Use HTTPS sempre
- ✅ Mantenha dependências atualizadas
- ✅ Configure CORS corretamente
- ✅ Use variáveis de ambiente para secrets
- ✅ Implemente rate limiting
- ✅ Faça backups regulares

---

Para dúvidas, consulte a documentação oficial de cada plataforma.
