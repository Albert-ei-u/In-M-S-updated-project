import express from "express";
import { createSale } from "../controllers/saleController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSale);

export default router;

/**
 * @swagger
 * tags:
 *   name: Sales
 *   description: Product sales
 */

/**
 * @swagger
 * /api/sales:
 *   post:
 *     summary: Sell product (reduce stock & calculate profit)
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Sale successful
 */
