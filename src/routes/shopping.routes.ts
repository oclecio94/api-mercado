import { create } from "../controllers/shopping.controller";

export const shoppingRoutes = (app: any) => {
  app.post("/v1/shopping", create);
};
