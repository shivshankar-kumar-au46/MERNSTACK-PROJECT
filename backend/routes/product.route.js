import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.post("/", createProduct)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)
router.get("/", getProduct)

export default router;