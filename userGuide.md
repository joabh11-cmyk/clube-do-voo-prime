# Guia do Usuário - Sistema de Pontos Viaja Mais

## Informações Gerais

**Acesso:** Login requerido (apenas administradores)

**Propósito:** Este sistema permite que administradores de agências de viagens gerenciem um programa de pontos rentável para clientes B2C (lazer/turismo) e B2B (corporativo). Você pode cadastrar clientes, registrar compras que acumulam pontos automaticamente, gerenciar bônus e processar resgates de recompensas.

## Powered by Manus

Este sistema foi desenvolvido utilizando tecnologias modernas e escaláveis. O **frontend** é construído com **React 19**, **TypeScript** e **Tailwind CSS 4**, garantindo uma interface responsiva e intuitiva. O **backend** utiliza **Express 4** e **tRPC 11** para comunicação type-safe entre cliente e servidor, eliminando erros de integração. A **autenticação** é gerenciada via **Manus OAuth**, proporcionando login seguro e simplificado. O **banco de dados** é **MySQL/TiDB** com **Drizzle ORM**, oferecendo consultas otimizadas e type-safety completa. A **implantação** conta com infraestrutura auto-escalável e **CDN global**, garantindo alta disponibilidade e desempenho em qualquer região.

## Usando Seu Sistema

O sistema possui três áreas principais acessíveis pelo painel administrativo.

Na área de **Clientes**, você cadastra novos participantes do programa de pontos. Clique em "Novo Cliente", preencha o nome, email e telefone, selecione o tipo (B2C para clientes de lazer ou B2B para corporativo) e, se for B2B, informe o nome da empresa. Após clicar em "Cadastrar", o cliente aparecerá na lista com saldo inicial de zero pontos. A tabela mostra todos os clientes com seus dados, tipo de conta e saldo atual de pontos.

Na área de **Transações**, você registra compras que geram pontos automaticamente. Clique em "Registrar Compra", selecione o cliente, informe o valor da compra em reais e adicione uma descrição opcional. O sistema calcula os pontos automaticamente: clientes B2C ganham 5 pontos por real gasto (0,5%), enquanto clientes B2B ganham 10 pontos por real (1,0%). Você também pode adicionar bônus manuais clicando em "Adicionar Bônus", selecionando o cliente, informando a quantidade de pontos e a descrição (como "Bônus de Aniversário"). Para processar resgates, clique em "Realizar Resgate", escolha o cliente e a opção de resgate desejada. O sistema verifica automaticamente se o cliente possui pontos suficientes e se a opção é válida para seu tipo de conta.

Na área de **Resgates**, você configura as recompensas disponíveis no programa. Clique em "Nova Opção", preencha o título e descrição da recompensa, defina o custo em pontos, selecione a categoria (Desconto, Upgrade, Produto ou Serviço) e escolha para qual tipo de cliente a opção estará disponível (Todos, apenas B2C ou apenas B2B). As opções criadas aparecem em cards coloridos mostrando todas as informações e status de ativação.

## Gerenciando Seu Sistema

O sistema oferece painéis de gerenciamento completos acessíveis pela interface de administração.

No painel de **Database**, você visualiza e edita diretamente os dados das tabelas do banco de dados. Acesse informações completas de conexão nas configurações (canto inferior esquerdo) e ative SSL para conexões seguras.

No painel de **Settings → General**, você personaliza o nome e logo do sistema através das variáveis VITE_APP_TITLE e VITE_APP_LOGO, além de controlar configurações de visibilidade.

No painel de **Settings → Domains**, você modifica o prefixo do domínio auto-gerado (xxx.manus.space) ou conecta domínios personalizados para seu sistema.

No painel de **Dashboard**, você monitora o status do sistema e, após publicação, acompanha métricas de acesso (UV/PV) e controla a visibilidade do site.

## Próximos Passos

Converse com a Manus AI a qualquer momento para solicitar alterações ou adicionar funcionalidades. Comece cadastrando seus primeiros clientes na área de "Clientes" e configure as opções de resgate que melhor se adequam ao perfil da sua agência.
