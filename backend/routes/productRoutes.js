import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/productController.js";
import protect from "../middlewares/authMiddleware.js";
const router= express.Router();

router.post("/",protect, createProduct);
router.get("/", protect, getProducts);
router.put("/",protect, updateProduct);
router.delete("/",protect, deleteProduct);

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
 *               quantity:
 *                 type: number
 *               costPrice:
 *                 type: number
 *               sellingPrice:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created
 *
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   costPrice:
 *                     type: number
 *                   sellingPrice:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Not authorized, token failed
 *       500:
 *         description: Internal server error
 */
