import { drizzle } from "drizzle-orm/mysql2";
import { redemptionOptions } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const initialRedemptions = [
  // B2C (Lazer)
  {
    title: "Desconto de R$ 100 em Nova Viagem",
    description: "Ganhe R$ 100 de desconto na sua próxima reserva de viagem",
    pointsCost: 10000,
    category: "discount",
    customerType: "b2c",
    isActive: 1,
  },
  {
    title: "Upgrade de Quarto de Hotel",
    description: "Upgrade gratuito para categoria superior em hotéis parceiros",
    pointsCost: 5000,
    category: "upgrade",
    customerType: "b2c",
    isActive: 1,
  },
  {
    title: "Kit Viagem Premium",
    description: "Kit com mala de bordo, necessaire e acessórios de viagem",
    pointsCost: 15000,
    category: "product",
    customerType: "b2c",
    isActive: 1,
  },
  {
    title: "Desconto de R$ 50 em Nova Viagem",
    description: "Ganhe R$ 50 de desconto na sua próxima reserva",
    pointsCost: 5000,
    category: "discount",
    customerType: "b2c",
    isActive: 1,
  },
  
  // B2B (Corporativo)
  {
    title: "Prazo de Pagamento Estendido (+7 dias)",
    description: "Ganhe 7 dias adicionais no prazo de pagamento",
    pointsCost: 50000,
    category: "service",
    customerType: "b2b",
    isActive: 1,
  },
  {
    title: "Workshop de Gestão de Viagens Corporativas",
    description: "Treinamento exclusivo para otimização de viagens corporativas",
    pointsCost: 100000,
    category: "service",
    customerType: "b2b",
    isActive: 1,
  },
  {
    title: "Desconto de R$ 500 em Pacote Corporativo",
    description: "Desconto especial para pacotes de viagens corporativas",
    pointsCost: 50000,
    category: "discount",
    customerType: "b2b",
    isActive: 1,
  },
  
  // Ambos
  {
    title: "Seguro Viagem Premium",
    description: "Seguro viagem completo para sua próxima viagem",
    pointsCost: 8000,
    category: "product",
    customerType: "both",
    isActive: 1,
  },
];

async function seed() {
  console.log("Iniciando população do banco de dados...");
  
  try {
    for (const redemption of initialRedemptions) {
      await db.insert(redemptionOptions).values(redemption);
      console.log(`✓ Criado: ${redemption.title}`);
    }
    
    console.log("\n✅ Banco de dados populado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao popular banco de dados:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

seed();
