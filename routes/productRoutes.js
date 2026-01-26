import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import protect from "../middlewares/authMiddleware.js";
const router= router.express();

router.post("/",protect, createProduct);
router.get("/", protect, getProducts);

export default router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - costPrice
 *               - sellingPrice
 *             properties:
 *               name:
 *                 type: string
 *               costPrice:
 *                 type: number
 *               sellingPrice:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created
 */
