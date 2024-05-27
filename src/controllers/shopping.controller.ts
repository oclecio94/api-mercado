import { Request, Response } from "express";
import { createPurchase } from "../repositories/shopping.repository";

export const create = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const purchase = await createPurchase(data);

    return res.status(200).send(purchase);
  } catch (e) {
    return res.status(400).send(e);
  }
};
