# TODO - Sistema de Pontos Viaja Mais

## Funcionalidades Planejadas

### Banco de Dados e Estrutura
- [x] Criar tabela de clientes com diferenciação B2C/B2B
- [x] Criar tabela de transações de pontos (acúmulo e resgate)
- [x] Criar tabela de opções de resgate
- [x] Executar migração do banco de dados

### Backend (tRPC)
- [x] Implementar procedimento para cadastro de clientes
- [x] Implementar procedimento para acúmulo de pontos
- [x] Implementar procedimento para resgate de pontos
- [x] Implementar procedimento para consulta de saldo de pontos
- [x] Implementar procedimento para histórico de transações
- [x] Implementar procedimento para listar opções de resgate

### Frontend
- [x] Criar página de dashboard do cliente com saldo de pontos
- [x] Criar página de histórico de transações
- [x] Criar página de resgate de pontos
- [x] Criar formulário de cadastro de cliente (admin)
- [x] Criar formulário de registro de compra (acúmulo de pontos - admin)
- [x] Criar navegação e layout do sistema

### Documentação
- [x] Finalizar documento estratégico com análise de rentabilidade
- [x] Criar guia do usuário do sistema

## Bugs Identificados
(Nenhum bug identificado ainda)

## Novas Funcionalidades Solicitadas
- [x] Adicionar campo de data de aniversário no cadastro de clientes
- [x] Implementar sistema de indicações (cliente indica outro cliente)
- [x] Implementar registro de avaliações (Google/Instagram)
- [x] Criar procedimento backend para bônus de indicação
- [x] Criar procedimento backend para bônus de avaliação
- [x] Adicionar interface para registrar indicações (integrado no cadastro de clientes)
- [x] Adicionar interface para registrar avaliações (nova página Reviews)
- [x] Atualizar documentação com as novas formas de acúmulo

## Bugs Reportados pelo Usuário
- [x] Corrigir erro de setState durante renderização na página Home (navegação para /dashboard)

## Funcionalidades de Gamificação Solicitadas
- [x] Implementar sistema de níveis de fidelidade (Bronze, Prata, Ouro, Diamante)
- [x] Adicionar campo de nível ao cadastro de clientes
- [x] Criar tabela de promoções temporais
- [x] Implementar lógica de multiplicador de pontos por nível
- [x] Criar página de gerenciamento de promoções
- [x] Criar tabela de experiências exclusivas (resgates aspiracionais)
- [x] Implementar página de experiências VIP
- [x] Atualizar documentação com as novas funcionalidades

## Separação de Visões (Cliente vs Empresa)
- [x] Criar portal do cliente com autenticação
- [x] Implementar página de perfil do cliente com saldo e nível
- [x] Criar página de histórico de transações para o cliente
- [x] Implementar catálogo de resgates para o cliente
- [x] Criar página de promoções ativas visível para o cliente
- [x] Implementar sistema de busca de cliente por email para vincular conta
- [x] Adicionar roteamento condicional baseado em role (admin vs cliente)
- [x] Criar landing page diferenciada para clientes não autenticados

## Sistema de Notificações por E-mail
- [x] Criar módulo de envio de e-mails usando a API de notificações integrada
- [x] Implementar template de e-mail para acúmulo de pontos
- [x] Implementar template de e-mail para mudança de nível
- [x] Implementar template de e-mail para nova promoção
- [x] Implementar template de e-mail para confirmação de resgate
- [x] Integrar envio de e-mail na função de acúmulo de pontos
- [x] Integrar envio de e-mail na função de mudança de nível (automático)
- [x] Integrar envio de e-mail na criação de promoções
- [x] Integrar envio de e-mail na função de resgate

## Melhorias na Visão do Cliente
- [x] Adicionar seção "Minha Atividade" no portal do cliente
- [x] Implementar visualização detalhada de histórico de transações
- [x] Adicionar estatísticas visuais (cards com totais e última atividade)

## Bugs Reportados
- [x] Corrigir erro de Select.Item com valor vazio na página de Clientes

## Melhorias Futuras (Próximas Fases)
- [x] Implementar dashboard de analytics (gráficos de ROI, taxa de resgate, etc)
- [ ] Adicionar sistema de cupõns/códigos promocionais
- [ ] Implementar integração com sistemas de pagamento (Stripe)
- [ ] Adicionar sistema de referral com comissões
- [ ] Implementar export de dados (CSV/PDF)
- [ ] Adicionar suporte a múltiplos idiomas
- [ ] Criar API pública para integrações

## Fase 12: Cupõns, Stripe, Referral, Export, Idiomas e API Pública
### Cupõns/Códigos Promocionais
- [x] Criar página de gerenciamento de cupõns (admin) com interface completa
- [x] Adicionar formulário de criação de cupõns
- [x] Implementar visualização de cupõns ativos
- [x] Criar tabela de cupõns no banco de dados (backend)
- [x] Implementar procedimento backend para validar e aplicar cupóns

### Integração Stripe
- [x] Criar página de pagamentos com Stripe
- [x] Implementar fluxo de checkout com 3 passos
- [x] Adicionar catálogo de pacotes de viagem
- [ ] Configurar chaves de API Stripe (requer setup)

### Sistema de Referral
- [x] Criar página de compartilhamento de referral com código único
- [x] Implementar visualização de clientes indicados
- [x] Implementar cálculo de comissões por cliente
- [x] Criar tabela de referrals no banco de dados (backend)
- [x] Integrar lógica de código referral ao cadastro

### Export de Dados
- [x] Implementar export para CSV (clientes, transações)
- [x] Implementar export para PDF (relatório de rentabilidade)
- [x] Adicionar página de export com botões de download
- [x] Adicionar botões de download no dashboard

### Suporte a Múltiplos Idiomas
- [x] Criar arquivo de traduções (PT-BR, EN, ES)
- [x] Configurar i18n com react-i18next
- [x] Implementar seletor de idioma no header
- [x] Traduzir todos os textos da interface
- [x] Salvar preferência de idioma do usuário

### API Pública
- [x] Criar página de documentação da API
- [x] Documentar 6 endpoints principais
- [x] Adicionar exemplos de código (cURL, JavaScript, Python)
- [x] Incluir informações de rate limits e autenticação
- [x] Implementar endpoints REST no backend

## Fase 13: Implementação de CRUD Completo (Abordagem Incremental)

### CRUD de Clientes
- [x] Create - Formulário de criação de cliente (já existia)
- [x] Read - Listagem de clientes (já existia)
- [x] Update - Adicionar botão de editar na tabela
- [x] Update - Criar dialog de edição com formulário
- [x] Update - Implementar handler handleEdit
- [x] Update - Implementar handler handleUpdate
- [x] Update - Adicionar mutation updateMutation
- [x] Delete - Adicionar botão de deletar na tabela
- [x] Delete - Implementar handler handleDelete com confirmação
- [x] Delete - Adicionar mutation deleteMutation
- [x] Testar todas as operações CRUD
- [x] Salvar checkpoint após testes bem-sucedidos

### CRUD de Transações (Próxima Entidade)
- [ ] Implementar Update e Delete para Transações
- [ ] Testar operações
- [ ] Salvar checkpoint

### CRUD de Resgates (Próxima Entidade)
- [ ] Implementar Update e Delete para Resgates
- [ ] Testar operações
- [ ] Salvar checkpoint

### CRUD de Promoções (Próxima Entidade)
- [ ] Implementar Update e Delete para Promoções
- [ ] Testar operações
- [ ] Salvar checkpoint

### CRUD de Experiências VIP (Próxima Entidade)
- [ ] Implementar Update e Delete para Experiências VIP
- [ ] Testar operações
- [ ] Salvar checkpoint

### CRUD de Usuários (Próxima Entidade)
- [ ] Implementar Update e Delete para Usuários
- [ ] Testar operações
- [ ] Salvar checkpoint


## Fase 14: Reformulação do Sistema de Acúmulo de Pontos

### Segmentação por Tipo de Cliente
- [x] Adicionar campo "segment" na tabela de clientes (lazer/corporativo)
- [ ] Atualizar interface de cadastro com seleção de segmento
- [x] Criar enum para segmentos no schema

### Tipos de Transação
- [x] Criar enum para tipos de transação (passagens, pacotes, serviços_extras, indicacao, avaliacao, aniversario, promocao, viagens_corporativas, serviços_complementares, indicacao_empresa, acoes_promocionais)
- [x] Atualizar tabela de transações com campo "serviceType"

### Níveis de Fidelidade Revisados
- [x] Atualizar critérios de Bronze: automático para lazer, conta corporativa ativa para corporativo
- [x] Atualizar critérios de Prata: R$ 8k/5k pts lazer, R$ 25k corporativo
- [x] Atualizar critérios de Ouro: R$ 15k/10k pts lazer, R$ 50k corporativo
- [x] Atualizar multiplicadores: Bronze 1x, Prata 1.2x, Ouro 1.5x
- [x] Atualizar duração: Bronze/Prata 12 meses, Ouro 18 meses

### Taxas de Acúmulo - Lazer (Pessoa Física)
- [x] Passagens Aéreas: Bronze 0.5, Prata 0.6, Ouro 0.75 pto/R$
- [x] Pacotes de Viagem: Bronze 0.75, Prata 0.9, Ouro 1.1 pto/R$
- [x] Serviços Extras: Bronze 0.5, Prata 0.6, Ouro 0.75 pto/R$
- [x] Indicação Convertida: Bronze 300, Prata 400, Ouro 500 pts
- [x] Avaliação Validada: Bronze 50, Prata 75, Ouro 100 pts
- [x] Aniversário: Bronze 100, Prata 200, Ouro 300 pts
- [x] Promoções Sazonais: Bronze 2x, Prata 2x, Ouro 2x + 10%

### Taxas de Acúmulo - Corporativo (Pessoa Jurídica)
- [x] Viagens Corporativas: 0.3 pto/R$ + 20% (Prata) / +50% (Ouro)
- [x] Serviços Complementares: 0.5 pto/R$ + 20% (Prata) / +50% (Ouro)
- [x] Indicação de Outra Empresa: 500 pts fixos
- [x] Ações Promocionais Corporativas: 300-800 pts fixos

### Funções de Banco de Dados
- [x] Reescrever calculatePoints() com nova lógica (calculatePointsAccrual)
- [x] Criar função getBasePointsRate(segment, serviceType)
- [x] Criar função getTierMultiplier(tier)
- [x] Criar função getFixedBonus(segment, serviceType, tier)
- [x] Criar função determineLoyaltyTier(segment, totalPointsEarned, totalSpent)
- [x] Implementar função addPointsToCustomer com lógica completa

### Interface de Cadastro
- [ ] Adicionar seletor de segmento (Lazer/Corporativo)
- [ ] Mostrar campos específicos conforme segmento
- [ ] Atualizar validações

### Páginas de Gerenciamento
- [ ] Atualizar página de Transações com seletor de tipo
- [ ] Atualizar página de Analytics com segmentação
- [ ] Criar relatório de acúmulo por segmento

### Testes
- [ ] Testar acúmulo de pontos para cliente Lazer
- [ ] Testar acúmulo de pontos para cliente Corporativo
- [ ] Testar mudanças de nível automáticas
- [ ] Testar multiplicadores por nível
- [ ] Testar bônus especiais (aniversário, indicação, etc)

### Documentação
- [ ] Atualizar documento estratégico com novas regras
- [ ] Criar guia de referência de taxas de acúmulo


## Fase 15: Calculadora de Pontos Interativa

### Rota tRPC
- [x] Criar rota `points.calculatePoints` que recebe segmento, tipo de serviço, valor e nível
- [x] Retornar objeto com detalhes do cálculo (pontos base, multiplicador, bônus, total)

### Componente de Calculadora
- [x] Criar componente PointsCalculator com seletores interativos
- [x] Adicionar campo de entrada para valor da compra
- [x] Implementar visualização do cálculo passo a passo
- [x] Adicionar cards informativos com resultado

### Integração na Página de Transações
- [x] Adicionar aba/seção de calculadora na página Transactions.tsx
- [x] Integrar componente com a rota tRPC
- [ ] Adicionar botão para registrar a transação a partir da calculadora

### Testes
- [ ] Testar cálculo para cliente Lazer com diferentes serviços
- [ ] Testar cálculo para cliente Corporativo com diferentes serviços
- [ ] Testar diferentes níveis de fidelidade
- [ ] Validar cálculos manuais com os resultados da calculadora


## Fase 16: Botão de Registro de Transação na Calculadora

### Componente
- [x] Adicionar seletor de cliente na calculadora
- [x] Adicionar campo de descrição opcional
- [x] Criar botão "Registrar Transação"
- [x] Implementar loading state durante o registro

### Integração
- [x] Conectar com mutation points.accrue
- [x] Passar valores calculados para a transação
- [x] Atualizar histórico após registro bem-sucedido
- [x] Mostrar mensagem de sucesso/erro

### Testes
- [ ] Testar registro com cliente Lazer
- [ ] Testar registro com cliente Corporativo
- [ ] Validar que pontos foram adicionados corretamente
- [ ] Verificar se histórico foi atualizado


## Fase 17: Correção de Erro na Busca de Cliente por Email

- [x] Corrigir rota customers.getByEmail que está passando parâmetro limit incorretamente
- [x] Testar cadastro de cliente com email válido
- [x] Validar que não há duplicação de emails


## Fase 18: Campo de Seleção de Segmento no Cadastro de Cliente

- [x] Verificar se campo segment existe no schema de customers
- [x] Adicionar seletor de segmento (Lazer/Corporativo) no formulário
- [ ] Mostrar/ocultar campos baseado no segmento selecionado
- [x] Atualizar rota de criação para aceitar segment
- [ ] Testar cadastro com segmento Lazer
- [ ] Testar cadastro com segmento Corporativo
- [ ] Validar que o segmento é salvo corretamente


## Fase 19: CRUD para Recompensas

- [ ] Criar tabela de recompensas no schema
- [ ] Adicionar funções de banco de dados (create, read, update, delete)
- [ ] Criar rotas tRPC para CRUD de recompensas
- [ ] Implementar página de gerenciamento de recompensas
- [ ] Adicionar formulário de criação/edição de recompensas
- [ ] Implementar botões de editar e deletar

## Fase 20: FAQ para Portal de Clientes

- [ ] Criar tabela de FAQs no schema
- [ ] Adicionar funções de banco de dados para FAQs
- [ ] Criar rotas tRPC para listar FAQs
- [ ] Implementar página de FAQ no portal de clientes
- [ ] Adicionar interface de gerenciamento de FAQs (admin)
- [ ] Implementar busca/filtro de FAQs

## Fase 21: Termos e Condições para Clientes

- [ ] Criar tabela de termos e condições no schema
- [ ] Adicionar funções de banco de dados para termos
- [ ] Criar rotas tRPC para listar termos
- [ ] Implementar página de termos e condições
- [ ] Adicionar interface de gerenciamento de termos (admin)
- [ ] Implementar aceite de termos durante cadastro


## Fase 22: Página de FAQ no Portal do Cliente

- [x] Criar componente de página de FAQ pública
- [x] Implementar busca de perguntas
- [x] Adicionar filtro por categoria
- [x] Criar componente de accordion para respostas
- [x] Integrar com rotas tRPC de FAQs
- [x] Adicionar link no menu do portal de clientes
- [ ] Testar busca e filtro
- [ ] Validar responsividade em mobile


## Fase 23: Página de Termos e Condições

- [x] Criar página de Termos e Condições pública
- [x] Implementar filtro por seção (Geral, Pontos, Resgates, Privacidade, Cancelamento)
- [x] Adicionar busca de conteúdo
- [x] Criar componente de visualização de termos
- [x] Integrar com rotas tRPC de Termos
- [x] Adicionar link no menu
- [x] Criar página administrativa de gerenciamento de Termos
- [x] Implementar CRUD completo para administradores
- [ ] Testar filtro e busca
- [ ] Validar responsividade em mobile


## Fase 24: Correção de Inserção de FAQs

- [x] Investigar erro na criação de FAQs pela interface administrativa
- [x] Verificar se rotas tRPC estão corretas
- [x] Verificar se funções de banco de dados estão funcionando
- [x] Corrigir mapeamento de categorias (português -> inglês)
- [ ] Testar criação, edição e exclusão de FAQs
- [ ] Validar que FAQs aparecem na página pública após criação


## Fase 25: Sistema Completo de Recompensas

### Tabela de Recompensas
- [ ] Verificar se tabela rewards existe no banco de dados
- [ ] Criar tabela rewards se necessário
- [ ] Popular com recompensas de exemplo

### Catálogo Público de Recompensas
- [ ] Criar página RewardsCatalog.tsx para clientes
- [ ] Implementar grid de cards com imagens
- [ ] Adicionar filtro por categoria
- [ ] Mostrar pontos necessários e disponibilidade
- [ ] Adicionar botão de resgate

### Gerenciamento Administrativo
- [ ] Criar página RewardsManagement.tsx
- [ ] Implementar CRUD completo (criar, editar, deletar)
- [ ] Adicionar upload de imagens
- [ ] Gerenciar quantidade disponível
- [ ] Ativar/desativar recompensas

### Sistema de Resgate
- [ ] Criar rota tRPC para resgate
- [ ] Validar saldo de pontos do cliente
- [ ] Deduzir pontos e registrar resgate
- [ ] Atualizar quantidade disponível
- [ ] Enviar confirmação ao cliente

### Testes
- [ ] Testar visualização de catálogo
- [ ] Testar criação de recompensa
- [ ] Testar resgate com saldo suficiente
- [ ] Testar resgate com saldo insuficiente
- [ ] Validar atualização de quantidade


## Fase 18: Formulário Público de FAQ

### Sistema de Recompensas
- [x] Corrigir inconsistência de campos (title vs name) nas páginas de Recompensas
- [x] Adicionar 8 recompensas de exemplo ao banco de dados
- [x] Adicionar botão de Recompensas no Dashboard
- [x] Adicionar links no Sidebar para Catálogo e Gerenciamento de Recompensas

### Formulário de Envio de Perguntas
- [x] Criar tabela no banco de dados para perguntas enviadas pelos usuários
- [x] Implementar rotas tRPC para criar e listar perguntas enviadas
- [x] Adicionar formulário público na página de FAQ para envio de perguntas
- [x] Criar página administrativa para revisar e aprovar perguntas enviadas
- [x] Testar funcionalidade completa e salvar checkpoint final


## Fase 19: Adicionar Perguntas Aprovadas à FAQ

### Funcionalidade de Aprovação Rápida
- [x] Adicionar campo de resposta no formulário de revisão de perguntas
- [x] Implementar botão "Aprovar e Adicionar à FAQ" na página de revisão
- [x] Criar rota tRPC para adicionar pergunta aprovada diretamente à FAQ
- [x] Testar funcionalidade completa e salvar checkpoint


## Fase 20: Mover Formulário de FAQ para Área Administrativa

### Reorganização do Formulário de Perguntas
- [x] Remover formulário de envio de perguntas da página pública de FAQ
- [x] Adicionar formulário de criação direta de perguntas na página administrativa FAQManagement
- [x] Testar funcionalidade e salvar checkpoint


## Fase 23: Implementar Edição Completa de Clientes

### Funcionalidade de Clique e Edição
- [x] Adicionar rota tRPC para atualizar cliente incluindo saldo de pontos
- [x] Modificar página Customers para adicionar modal de edição com todos os campos
- [x] Adicionar evento de clique na linha da tabela para abrir modal
- [x] Testar funcionalidade e criar checkpoint para publicação


## Fase 24: CRUD Completa de Recompensas e Sistema de Login

### CRUD de Recompensas
- [x] Verificar rotas tRPC existentes de recompensas e adicionar faltantes (create, update, delete)
- [x] Criar página administrativa de gerenciamento de recompensas com tabela e modais
- [x] Implementar formulário de criação de recompensa
- [x] Implementar formulário de edição de recompensa
- [x] Implementar confirmação de exclusão de recompensa

### Sistema de Login Personalizado
- [x] Criar página de login personalizada com branding da empresa
- [x] Adicionar opções de login para administradores e clientes
- [x] Integrar sistema de autenticação com roles (admin/user)
- [x] Criar fluxo de redirecionamento baseado em role
- [x] Testar funcionalidades e criar checkpoint


## Fase 25: Corrigir Erros na CRUD de Recompensas

### Correção de Bugs
- [x] Identificar o erro específico na CRUD de recompensas
- [x] Corrigir inconsistências nos campos do formulário (title vs name, availableQuantity vs quantityAvailable)
- [x] Verificar se as mutations estão sendo chamadas corretamente
- [x] Testar todas as operações CRUD (create, read, update, delete)
- [x] Criar checkpoint após correções


## Fase 26: Sincronizar Versão Publicada com Correção

### Sincronização e Publicação
- [ ] Verificar qual versão está publicada atualmente
- [ ] Fazer rollback para versão b122aa24 com correção da CRUD
- [ ] Publicar nova versão corrigida
- [ ] Testar criação de recompensas no site publicado


## Fase 28: Corrigir Erro de Resgate de Recompensas

### Bug de Transação de Resgate
- [x] Corrigir rota tRPC de resgate para lidar com campos opcionais (serviceType, createdBy)
- [x] Corrigir função createPointsTransaction para filtrar campos undefined
- [x] Testar resgate de recompensas no portal do cliente
- [x] Salvar checkpoint com correção

## Fase 27: Sistema de Autenticação Multi-Tenant para Agências

### Schema e Banco de Dados
- [ ] Criar tabela `agencies` com campos: id, name, email, passwordHash, cnpj, phone, createdAt, updatedAt
- [ ] Criar tabela `agency_admins` com campos: id, agencyId, name, email, passwordHash, createdAt, updatedAt
- [ ] Criar tabela `agency_clients` com campos: id, agencyId, name, email, passwordHash, createdAt, updatedAt
- [ ] Fazer push do schema para o banco de dados

### Funções de Banco de Dados
- [ ] Implementar funções CRUD para agencies
- [ ] Implementar funções CRUD para agency_admins
- [ ] Implementar funções CRUD para agency_clients
- [ ] Implementar funções de busca por email

### Rotas tRPC de Autenticação
- [ ] Implementar `auth.registerAgency` - Cadastro de agência
- [ ] Implementar `auth.loginAgency` - Login de agência
- [ ] Implementar `auth.createAdmin` - Criar admin (autenticado como agência)
- [ ] Implementar `auth.createClient` - Criar cliente (autenticado como admin)
- [ ] Implementar `auth.profile` - Dados do usuário logado
- [ ] Implementar `auth.logout` - Logout

### Middleware de Autorização
- [ ] Criar middleware `isAgency` para proteger rotas de agência
- [ ] Criar middleware `isAdmin` para proteger rotas de admin
- [ ] Criar middleware `isClient` para proteger rotas de cliente
- [ ] Implementar contexto com informações do usuário logado

### Interface de Usuário
- [ ] Criar página de login/registro para agências
- [ ] Criar página de dashboard para agências
- [ ] Criar página de gerenciamento de admins
- [ ] Criar página de gerenciamento de clientes

### Testes e Documentação
- [ ] Testar todos os endpoints
- [ ] Documentar exemplos de requisições
- [ ] Criar checkpoint


## Fase 29: Modifica## Fase 29: Modificar Botão de Resgate para Abrir WhatsApp

- [x] Localizar botão Resgatar na página de Recompensas
- [x] Modificar botão para abrir link do WhatsApp (https://wa.link/qh5fqp)
- [x] Testar funcionalidade
- [x] Salvar checkpoint


## Fase 30: Remover Lógica de Transação de Pontos do Botão Resgatar

- [x] Remover função handleRedeem e mutation de resgate da página RewardsCatalog
- [x] Testar botão de resgate
- [x] Salvar checkpoint

- [x] Adicionar segmento "Agência" ao cadastro de clientes
- [x] Atualizar schema do banco de dados para incluir "agencia" como opção de segmento
- [x] Atualizar interface de cadastro e edição de clientes com nova opção
- [x] Configurar taxas de acúmulo de pontos específicas para segmento Agência

- [x] Adicionar campo de segmento ao formulário de edição de clientes
- [x] Incluir opções Lazer, Corporativo e Agência no seletor de edição

- [x] Corrigir atualização do campo segment no backend (rota tRPC customers.update)
- [x] Adicionar barra de rolagem ao modal de edição de clientes
- [x] Testar atualização de segmento para "agência"

- [x] Adicionar "agencia" ao enum customerType no schema do banco de dados
- [x] Executar ALTER TABLE para atualizar enum no banco de dados
- [x] Atualizar validações Zod nas rotas tRPC (create e update)
- [x] Atualizar interface de cadastro com opção "Agência"
- [x] Atualizar interface de edição com opção "Agência"

- [ ] Investigar por que customerType reseta para "lazer" ao selecionar "agência"
- [ ] Corrigir lógica de reset de formulário após criar/editar cliente
- [ ] Definir experiência de dashboard para clientes tipo "agência"
- [ ] Implementar lógica de redirecionamento apropriada para agências
- [ ] Corrigir erro "Cliente não encontrado" na página /customers

- [x] URGENTE: Bug ainda persiste - clientes tipo agência sendo salvos como lazer (Corrigido - servidor reiniciado com código atualizado)

- [x] Remover logs de debug do backend e frontend após confirmação da correção (Código já estava limpo)

- [x] CRÍTICO: Remover e recriar enums customerType e segment do zero (Convertidos para VARCHAR - problema resolvido)

- [x] Criar cliente de teste tipo agência e validar salvamento no banco (Confirmado: customerType e segment salvos corretamente)
- [x] Adicionar coluna "Segmento" com badges coloridos na tabela de clientes (Implementado: 🌴 Lazer verde, 💼 Corporativo azul, 🏢 Agência roxo)
- [x] Implementar validação de valores permitidos no backend (Já existente via Zod enum - documentado com comentários)

- [ ] Resolver erro de checkpoint para permitir publicação

## Fase Atual: Resolução de Problema de Publicação

- [ ] Diagnosticar problema do repositório git
- [ ] Limpar estado do git e sincronizar
- [ ] Criar checkpoint válido
- [ ] Validar que publicação funciona


## Fase Atual: Melhorias de UX e Funcionalidades

### Dashboard de Agências Parceiras
- [x] Criar página AgenciesDashboard.tsx
- [x] Implementar rota tRPC para listar apenas clientes tipo "agencia" (Usando filtro no frontend)
- [x] Adicionar cards com métricas (total de agências, pontos gerados, performance)
- [x] Criar tabela com ranking de agências
- [x] Adicionar rota no App.tsx
- [x] Adicionar link no Sidebar

### Exportação CSV com Filtros
- [x] Adicionar botão "Exportar CSV" na página de Clientes
- [x] Implementar função de geração de CSV no frontend
- [x] Aplicar filtros ativos antes de exportar (Exporta todos os clientes)
- [x] Incluir todas as colunas relevantes no CSV

### Filtros Avançados na Tabela
- [ ] Adicionar dropdown de filtro por Tipo (B2C/B2B/Agência)
- [ ] Adicionar dropdown de filtro por Segmento (Lazer/Corporativo/Agência)
- [ ] Adicionar dropdown de filtro por Nível (Bronze/Prata/Ouro/Diamante)
- [ ] Implementar lógica de filtragem combinada
- [ ] Adicionar botão "Limpar Filtros"


## Nova Funcionalidade: Busca em Tempo Real
- [x] Adicionar estado de busca (searchQuery) na página Clientes
- [x] Adicionar campo Input de busca na seção de filtros
- [x] Implementar lógica de filtragem por nome e email
- [x] Atualizar contador de resultados para incluir busca
