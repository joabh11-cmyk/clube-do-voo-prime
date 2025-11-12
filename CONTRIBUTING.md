# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o Sistema de Pontos Viaja Mais! Este documento fornece diretrizes e instruções para contribuir.

## Código de Conduta

Este projeto adota um Código de Conduta que esperamos que todos os contribuidores sigam. Por favor, leia [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) antes de contribuir.

## Como Contribuir

### 1. Reportar Bugs

Antes de criar um relatório de bug, verifique se o problema já foi reportado. Se você encontrar um bug:

1. **Use um título descritivo** para identificar o problema
2. **Descreva os passos exatos** para reproduzir o problema
3. **Forneça exemplos específicos** para demonstrar os passos
4. **Descreva o comportamento observado** e explique qual era o comportamento esperado
5. **Inclua screenshots ou GIFs** se possível
6. **Mencione sua configuração** (SO, navegador, versão do Node.js, etc.)

### 2. Sugerir Melhorias

Se você tiver uma ideia para melhorar o projeto:

1. Use um título descritivo
2. Forneça uma descrição detalhada da melhoria sugerida
3. Liste alguns exemplos de como a melhoria seria útil
4. Mencione outras aplicações similares que possuem essa funcionalidade

### 3. Pull Requests

- Preencha o template fornecido
- Siga os estilos de código do projeto
- Inclua testes apropriados
- Atualize a documentação conforme necessário
- Termine todos os arquivos com uma nova linha

## Processo de Desenvolvimento

### Setup Local

```bash
# 1. Fork o repositório
# 2. Clone seu fork
git clone https://github.com/seu-usuario/programa_pontos_viagem.git
cd programa_pontos_viagem

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/original-usuario/programa_pontos_viagem.git

# 4. Instale dependências
pnpm install

# 5. Crie uma branch para sua feature
git checkout -b feature/sua-feature
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev

# Execute testes
pnpm test

# Lint do código
pnpm lint

# Build para produção
pnpm build
```

### Commit

- Use mensagens de commit descritivas em português ou inglês
- Comece com um verbo no imperativo (Add, Fix, Update, etc.)
- Exemplo: `Add real-time search to customers page`

```bash
git add .
git commit -m "Add real-time search to customers page"
```

### Push e Pull Request

```bash
# Sincronize com upstream
git fetch upstream
git rebase upstream/main

# Push para seu fork
git push origin feature/sua-feature

# Abra um Pull Request no GitHub
```

## Padrões de Código

### TypeScript

- Use tipos explícitos quando possível
- Evite `any`
- Prefira interfaces sobre tipos para objetos
- Documente funções complexas

```typescript
// ✅ Bom
interface Customer {
  id: number;
  name: string;
  email: string;
  segment: 'lazer' | 'corporativo' | 'agencia';
}

function getCustomerById(id: number): Promise<Customer | null> {
  // ...
}

// ❌ Ruim
function getCustomer(id: any): any {
  // ...
}
```

### React

- Use componentes funcionais com hooks
- Prefira composição sobre herança
- Mantenha componentes pequenos e reutilizáveis
- Use nomes descritivos para componentes

```typescript
// ✅ Bom
export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className="card">
      <h3>{customer.name}</h3>
      <p>{customer.email}</p>
    </div>
  );
}

// ❌ Ruim
export function C({ c }: { c: any }) {
  return <div>{c.n}</div>;
}
```

### Estilos

- Use Tailwind CSS para styling
- Siga a paleta de cores do projeto
- Mantenha componentes responsivos

```tsx
// ✅ Bom
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* conteúdo */}
</div>

// ❌ Ruim
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
  {/* conteúdo */}
</div>
```

## Estrutura de Pastas

```
src/
├── pages/          # Páginas principais
├── components/     # Componentes reutilizáveis
├── hooks/          # Custom hooks
├── lib/            # Utilitários
├── contexts/       # React contexts
└── types/          # Tipos TypeScript
```

## Testes

- Escreva testes para novas funcionalidades
- Mantenha cobertura de testes acima de 80%
- Use descritores claros para testes

```typescript
describe('CustomerCard', () => {
  it('should display customer name', () => {
    const customer = { id: 1, name: 'John', email: 'john@example.com' };
    render(<CustomerCard customer={customer} />);
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
```

## Documentação

- Atualize README.md se adicionar novas funcionalidades
- Documente funções complexas com comentários JSDoc
- Mantenha exemplos de uso atualizados

```typescript
/**
 * Calcula pontos de fidelidade baseado no segmento e valor
 * @param segment - Segmento do cliente ('lazer', 'corporativo', 'agencia')
 * @param value - Valor da transação em R$
 * @returns Número de pontos calculados
 */
function calculatePoints(segment: string, value: number): number {
  // ...
}
```

## Checklist para Pull Request

- [ ] Testei as mudanças localmente
- [ ] Criei testes para novas funcionalidades
- [ ] Atualizei a documentação
- [ ] Meu código segue os estilos do projeto
- [ ] Não há conflitos com a branch principal
- [ ] Meu PR tem uma descrição clara do que muda

## Dúvidas?

- Abra uma issue com a tag `question`
- Consulte a documentação em `README.md`
- Verifique issues similares já fechadas

## Reconhecimento

Todos os contribuidores serão reconhecidos no arquivo CONTRIBUTORS.md.

---

Obrigado por contribuir! 🎉
