import { Response } from "express";
import { getAll } from "../repositories/product.repository";

export const get = async (req: any, res: Response) => {
  try {
    const skip = Number(req.query?.skip) || 0;
    const take = Number(req.query?.take) || 20;
    const search = req.query?.search ? String(req.query?.search) : null;
    const products = await getAll(skip, take, search);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(400).send(e);
  }
};
