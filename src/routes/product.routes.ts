import { get } from "../controllers/product.controller";

export const productRoutes = (app: any) => {
  app.get("/v1/products", get);
};
