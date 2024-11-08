import { Router } from "express";
import {
  getAllProduct,
  getGeneralProduct,
} from "../controller/productController.js";
import { protectRoutesInServer } from "../controller/authController.js";
const router = Router();
router.get("/generalProducts", protectRoutesInServer, getGeneralProduct);
router.get("/allproducts", protectRoutesInServer, getAllProduct);
export default router;
