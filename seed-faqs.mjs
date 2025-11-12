import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'programa_pontos_viagem',
});

const faqs = [
  // Geral
  {
    category: 'Geral',
    question: 'O que é o Programa de Pontos Viaja Mais?',
    answer: 'O Programa de Pontos Viaja Mais é um programa de fidelidade que recompensa seus clientes com pontos a cada compra. Esses pontos podem ser acumulados e resgatados por recompensas exclusivas, descontos e experiências VIP.',
    order: 1
  },
  {
    category: 'Geral',
    question: 'Como faço para me cadastrar no programa?',
    answer: 'O cadastro é automático! Ao realizar sua primeira compra, você já é incluído no programa. Você pode acessar sua conta no portal do cliente para acompanhar seus pontos e benefícios.',
    order: 2
  },
  {
    category: 'Geral',
    question: 'Qual é a validade dos meus pontos?',
    answer: 'Os pontos têm validade de 12 meses a partir da data de acúmulo. Clientes com nível Ouro têm validade estendida para 18 meses. Recomendamos utilizar seus pontos regularmente para aproveitar ao máximo o programa.',
    order: 3
  },

  // Pontos
  {
    category: 'Pontos',
    question: 'Quantos pontos ganho em cada compra?',
    answer: 'A quantidade de pontos varia de acordo com o tipo de serviço e seu nível de fidelidade. Para passagens aéreas, você ganha entre 0,5 e 0,75 pontos por real gasto. Para pacotes de viagem, entre 0,75 e 1,1 pontos por real. Clientes corporativos têm taxas específicas.',
    order: 1
  },
  {
    category: 'Pontos',
    question: 'Como funciona o sistema de níveis?',
    answer: 'Existem 3 níveis: Bronze (acesso automático), Prata (a partir de R$ 8.000 em compras anuais) e Ouro (acima de R$ 15.000). Cada nível oferece multiplicadores maiores e benefícios exclusivos.',
    order: 2
  },
  {
    category: 'Pontos',
    question: 'Posso transferir meus pontos para outra pessoa?',
    answer: 'Não, os pontos são pessoais e intransferíveis. No entanto, você pode indicar amigos e ganhar bônus quando eles se cadastram e realizam compras.',
    order: 3
  },

  // Recompensas
  {
    category: 'Recompensas',
    question: 'Quais são as recompensas disponíveis?',
    answer: 'Oferecemos uma variedade de recompensas incluindo descontos em passagens, upgrades de hospedagem, experiências VIP, seguros de viagem e muito mais. Confira nosso catálogo de recompensas no portal.',
    order: 1
  },
  {
    category: 'Recompensas',
    question: 'Como faço para resgatar meus pontos?',
    answer: 'Acesse seu portal do cliente, navegue até a seção "Resgates" e escolha a recompensa desejada. Você pode resgatar seus pontos a qualquer momento, desde que tenha saldo suficiente.',
    order: 2
  },
  {
    category: 'Recompensas',
    question: 'Posso combinar pontos com outras promoções?',
    answer: 'Sim! Você pode usar seus pontos em conjunto com cupons promocionais e ofertas especiais. Algumas restrições podem se aplicar a promoções específicas. Consulte os termos de cada promoção.',
    order: 3
  },

  // Conta
  {
    category: 'Conta',
    question: 'Como faço para atualizar meus dados cadastrais?',
    answer: 'Você pode atualizar seus dados diretamente no portal do cliente. Acesse a seção "Minha Conta" e edite as informações que desejar. As alterações são aplicadas imediatamente.',
    order: 1
  },
  {
    category: 'Conta',
    question: 'Esqueci minha senha. Como faço para recuperá-la?',
    answer: 'Na página de login, clique em "Esqueci minha senha" e siga as instruções. Você receberá um email com um link para redefinir sua senha de forma segura.',
    order: 2
  },
  {
    category: 'Conta',
    question: 'Como faço para cancelar minha conta?',
    answer: 'Para cancelar sua conta, entre em contato com nosso atendimento. Seus pontos não utilizados serão perdidos, portanto recomendamos resgatá-los antes de cancelar.',
    order: 3
  },

  // Técnico
  {
    category: 'Técnico',
    question: 'O portal não está funcionando. O que fazer?',
    answer: 'Tente limpar o cache do seu navegador e fazer login novamente. Se o problema persistir, entre em contato com nosso suporte técnico através do email ou telefone disponível no portal.',
    order: 1
  },
  {
    category: 'Técnico',
    question: 'Meus pontos não aparecem na minha conta. Por que?',
    answer: 'Os pontos são creditados automaticamente após a confirmação da compra, o que pode levar até 24 horas. Se após este período os pontos não aparecerem, entre em contato com o suporte.',
    order: 2
  },
  {
    category: 'Técnico',
    question: 'Qual navegador é recomendado para acessar o portal?',
    answer: 'O portal funciona em todos os navegadores modernos (Chrome, Firefox, Safari, Edge). Recomendamos manter seu navegador atualizado para melhor experiência e segurança.',
    order: 3
  }
];

try {
  console.log('Iniciando seed de FAQs...');
  
  // Limpar FAQs existentes
  await connection.execute('DELETE FROM faqs');
  console.log('FAQs anteriores removidas');
  
  // Inserir novas FAQs
  for (const faq of faqs) {
    await connection.execute(
      'INSERT INTO faqs (category, question, answer, `order`, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())',
      [faq.category, faq.question, faq.answer, faq.order]
    );
  }
  
  console.log(`✓ ${faqs.length} FAQs inseridas com sucesso!`);
  
  await connection.end();
  process.exit(0);
} catch (error) {
  console.error('Erro ao popular FAQs:', error);
  await connection.end();
  process.exit(1);
}
