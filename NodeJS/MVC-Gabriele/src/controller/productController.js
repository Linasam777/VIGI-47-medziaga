import { Router } from "express";
import { getProducts } from "../services/productsServices.js";

const router = Router();

router.get("/", getProducts);

export default router; // rekomenduotina export const productRouter