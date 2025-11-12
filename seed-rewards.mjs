import { drizzle } from "drizzle-orm/mysql2";
import { rewards } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const sampleRewards = [
  {
    title: "Desconto de 10% em Pacote de Viagem",
    description: "Ganhe 10% de desconto em qualquer pacote de viagem nacional ou internacional. Válido por 6 meses.",
    category: "travel",
    pointsCost: 5000,
    availableQuantity: 50,
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Upgrade de Classe Econômica para Executiva",
    description: "Upgrade gratuito de classe econômica para executiva em voos nacionais. Sujeito à disponibilidade.",
    category: "travel",
    pointsCost: 15000,
    availableQuantity: 20,
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Jantar para 2 Pessoas em Restaurante Parceiro",
    description: "Jantar completo para duas pessoas em restaurantes parceiros selecionados. Inclui entrada, prato principal e sobremesa.",
    category: "dining",
    pointsCost: 8000,
    availableQuantity: 30,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Ingresso VIP para Show ou Evento",
    description: "Ingresso VIP para shows, eventos esportivos ou culturais. Consulte disponibilidade de eventos.",
    category: "events",
    pointsCost: 12000,
    availableQuantity: 15,
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Mala de Viagem Premium",
    description: "Mala de viagem de alta qualidade, resistente e com rodas 360°. Tamanho médio (23kg).",
    category: "products",
    pointsCost: 20000,
    availableQuantity: 10,
    imageUrl: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Seguro Viagem Internacional Completo",
    description: "Seguro viagem internacional com cobertura completa para viagens de até 30 dias.",
    category: "services",
    pointsCost: 7000,
    availableQuantity: null, // Ilimitado
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Transfer Aeroporto VIP",
    description: "Transfer executivo do aeroporto para hotel ou residência em veículo de luxo.",
    category: "services",
    pointsCost: 3000,
    availableQuantity: null, // Ilimitado
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500",
    isActive: 1,
    createdBy: 1
  },
  {
    title: "Hospedagem 2 Diárias em Resort",
    description: "Duas diárias em resort parceiro com café da manhã incluído. Válido para 2 pessoas.",
    category: "travel",
    pointsCost: 25000,
    availableQuantity: 5,
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
    isActive: 1,
    createdBy: 1
  }
];

async function seedRewards() {
  try {
    console.log("Inserindo recompensas de exemplo...");
    
    for (const reward of sampleRewards) {
      await db.insert(rewards).values(reward);
      console.log(`✓ Adicionada: ${reward.title}`);
    }
    
    console.log("\n✅ Todas as recompensas foram inseridas com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao inserir recompensas:", error);
    process.exit(1);
  }
}

seedRewards();
