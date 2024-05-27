const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const usersCount = await prisma.product.count();

  if (usersCount > 0) {
    console.log("A base de dados já foi populada. Encerrando o seed.");
    process.exit(0);
  }

  try {
    const products = [
      {
        name: "AZEITE PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
        price: 20.49,
        qty_stock: 2,
      },
      {
        name: "BEBIDA ENERGÉTICA VIBE 2L",
        price: 8.99,
        qty_stock: 659,
      },
      {
        name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
        price: 7.29,
        qty_stock: 909,
      },
      {
        name: "ENERGÉTICO RED BULL ENERGY DRINK 355ML",
        price: 10.79,
        qty_stock: 159,
      },
      {
        name: "ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",
        price: 7.49,
        qty_stock: 659,
      },
      {
        name: "ÁGUA MINERAL BONAFONT SEM GÁS 1L",
        price: 2.39,
        qty_stock: 909,
      },
      {
        name: "FILME DE PVC WYDA 28CMX15M",
        price: 3.99,
        qty_stock: 160,
      },
      {
        name: "FILME DE PVC PRATSY 15M",
        price: 4.39,
        qty_stock: 410,
      },
      {
        name: "ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7",
        price: 5.79,
        qty_stock: 660,
      },
      {
        name: "ÁGUA MINERAL SEM GÁS MINALBA 1L",
        price: 2.29,
        qty_stock: 910,
      },
      {
        name: "GUARDANAPO GRAND HOTEL SCOTT 24X24CM C/ 50UN",
        price: 4.39,
        qty_stock: 160,
      },
      {
        name: "GUARDANAPO DIA A DIA SCOTT 24X22CM C/ 50UN",
        price: 2.59,
        qty_stock: 411,
      },
      {
        name: "GUARDANAPO FOLHA DUPLA SNOB 23X23CM C/ 50UN",
        price: 4.25,
        qty_stock: 411,
      },
      {
        name: "GUARDANAPO FOLHA SIMPLES SNOB 24X22CM C/ 50UN",
        price: 2.19,
        qty_stock: 661,
      },
      {
        name: "PAPEL TOALHA SNOB C/ 2UN",
        price: 5.39,
        qty_stock: 912,
      },
      {
        name: "TOALHA DE PAPEL SCOTT DURAMAX C/ 1UN",
        price: 11.29,
        qty_stock: 162,
      },
      {
        name: "PRATO DESCARTÁVEL COPOBRAS 18CM",
        price: 1.99,
        qty_stock: 163,
      },
      {
        name: "PRATO DESCARTÁVEL COPOBRAS 15CM",
        price: 2.9,
        qty_stock: 413,
      },
      {
        name: "PRATO DESCARTÁVEL COPOBRAS 21CM",
        price: 3.79,
        qty_stock: 913,
      },
      {
        name: "COLHER DESCARTÁVEL MASTER PRAFESTA BRANCA C/ 50UN",
        price: 5.99,
        qty_stock: 413,
      },
      {
        name: "GARFO DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",
        price: 7.49,
        qty_stock: 914,
      },
      {
        name: "FACA DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",
        price: 8.99,
        qty_stock: 3,
      },
      {
        name: "SACO PARA LIXO DOVER ROLL SUPER FORTE AZUL 50L C/ 30UN",
        price: 42.9,
        qty_stock: 915,
      },
      {
        name: "PANO PARA LIMPEZA PERFEX C/ 5UN",
        price: 6.99,
        qty_stock: 415,
      },
      {
        name: "PANO PARA LIMPEZA ALKLIN C/ 5UN",
        price: 4.79,
        qty_stock: 665,
      },
      {
        name: "VELA SANTA CRUZ BRANCA C/8 25G",
        price: 5.89,
        qty_stock: 915,
      },
      {
        name: "VELA SANTA CRUZ C/8 30G",
        price: 6.89,
        qty_stock: 416,
      },
      {
        name: "BEBIDA DE SOJA SOYOS SÚFRESH LARANJA E CENOURA 1L",
        price: 4.99,
        qty_stock: 666,
      },
      {
        name: "BEBIDA A BASE DE SOJA ADES LARANJA 1L",
        price: 5.39,
        qty_stock: 916,
      },
      {
        name: "BEBIDA A BASE DE SOJA ADES MAÇÃ 1L",
        price: 5.59,
        qty_stock: 166,
      },
      {
        name: "BEBIDA À BASE DE SOJA ADES MAÇÃ ZERO 1L",
        price: 7.39,
        qty_stock: 416,
      },
      {
        name: "BEBIDA À BASE DE SOJA ADES LARANJA ZERO 1L",
        price: 7.39,
        qty_stock: 667,
      },
      {
        name: "CREME DE TRATAMENTO ELSEVE ULTRA LISO 300G",
        price: 16.99,
        qty_stock: 417,
      },
      {
        name: "CREME DE TRATAMENTO ELSEVE OLÉO EXTRAORDINÁRIO 300G",
        price: 18.99,
        qty_stock: 667,
      },
      {
        name: "DESODORANTE ROLL ON DOVE ORIGINAL 50ML",
        price: 10.49,
        qty_stock: 669,
      },
      {
        name: "DESODORANTE ROLL ON DOVE SENSITIVE SEM PERFUME 50ML",
        price: 10.74,
        qty_stock: 919,
      },
      {
        name: "DESODORANTE AEROSOL DOVE BEAUTY 150ML",
        price: 14.99,
        qty_stock: 169,
      },
      {
        name: "DESODORANTE AEROSOL DOVE PURE 100G",
        price: 13.19,
        qty_stock: 419,
      },
      {
        name: "REFRIGERANTE ANTARCTICA GUARANÁ 2L",
        price: 6.79,
        qty_stock: 670,
      },
      {
        name: "ÁGUA MINERAL SEM GÁS CRYSTAL GARRAFÃO 5L",
        price: 7.99,
        qty_stock: 920,
      },
      {
        name: "REFRIGERANTE H2OH! DE LIMÃO 500ML",
        price: 3.9,
        qty_stock: 670,
      },
      {
        name: "DESODORANTE AEROSOL NIVEA SENSITIVE SEM PERFUME 150ML",
        price: 11.99,
        qty_stock: 171,
      },
      {
        name: "REFRIGERANTE H2OH! LIMÃO 1L",
        price: 6.99,
        qty_stock: 921,
      },
      {
        name: "DESODORANTE AEROSOL NIVEA BLACK&WHITE INVISIBLE MASCULINO 150ML",
        price: 11.99,
        qty_stock: 171,
      },
      {
        name: "ÁGUA MINERAL PRATA SEM GÁS 1L",
        price: 3.9,
        qty_stock: 172,
      },
      {
        name: "NÉCTAR MAGUARY DE MARACUJÁ 1L",
        price: 4.49,
        qty_stock: 672,
      },
      {
        name: "REFRIGERANTE ANTARCTICA GUARANÁ ZERO 2L",
        price: 5.79,
        qty_stock: 923,
      },
      {
        name: "ÁGUA MINERAL SEM GÁS CRYSTAL PET 1L",
        price: 2.59,
        qty_stock: 173,
      },
      {
        name: "ÁGUA MINERAL BONAFONT SEM GÁS 500ML",
        price: 1.75,
        qty_stock: 423,
      },
      {
        name: "DESODORANTE AEROSOL REXONA ANTIBACTERIANO + INVISIBLE PROTECTION FEMININO 150ML",
        price: 11.99,
        qty_stock: 673,
      },
    ];

    await prisma.product.createMany({
      data: products,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
