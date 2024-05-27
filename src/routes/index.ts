import { productRoutes } from "./product.routes";
import { shoppingRoutes } from "./shopping.routes";

const routes = (app: any) => {
  productRoutes(app);
  shoppingRoutes(app);
};

export default routes;
