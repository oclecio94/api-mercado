import { prisma } from "../services/prisma";

export const createPurchase = async (data: any) => {
  const { client_name, delivery_date, products } = data;

  // Verificar a quantidade disponível para cada produto
  const unavailableProducts = [];

  for (const product of products) {
    const dbProduct = await prisma.product.findUnique({
      where: { id: product.productId },
    });

    if (!dbProduct || dbProduct.qty_stock < product.quantity) {
      unavailableProducts.push({
        productId: product.productId,
        name: dbProduct ? dbProduct.name : "Produto não encontrado",
        qty_stock: dbProduct ? dbProduct.qty_stock : 0,
      });
    }
  }

  // Se houver produtos indisponíveis, retornar um erro
  if (unavailableProducts.length > 0) {
    return {
      success: false,
      message: "Alguns produtos não têm a quantidade solicitada",
      products: unavailableProducts,
    };
  }

  // Usar uma transação para garantir atomicidade
  const purchase = await prisma.$transaction(async (prisma) => {
    // Debitar a quantidade do estoque
    for (const product of products) {
      await prisma.product.update({
        where: { id: product.productId },
        data: {
          qty_stock: {
            decrement: product.quantity,
          },
        },
      });
    }

    // Criar a compra
    const newPurchase = await prisma.shopping.create({
      data: {
        client_name,
        delivery_date: new Date(delivery_date),
        itemShoppings: {
          create: products.map((product: any) => ({
            product_id: product.productId,
            quantity: product.quantity,
            price: product.price,
          })),
        },
      },
      include: {
        itemShoppings: true,
      },
    });

    return newPurchase;
  });

  return {
    success: true,
    message: "Compra realizada com sucesso",
    purchase: purchase,
  };
};
