import { prisma } from "../services/prisma";

// type Product = {
//   name: string;
//   price: number;
//   qty_stock: number;
// };

export const getAll = async (
  skip: number,
  take: number,
  search: string | null
) => {
  if (!search) {
    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        skip,
        take,
      }),
      prisma.product.count({}),
    ]);
    const totalPage = Math.ceil(total / take);
    return { total, totalPage, products };
  } else {
    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        where: {
          name: search,
        },

        skip,
        take,
      }),
      prisma.product.count({}),
    ]);
    const totalPage = Math.ceil(total / take);
    return { total, totalPage, products };
  }
};
