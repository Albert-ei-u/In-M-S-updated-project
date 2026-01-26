import express from "express";
import { createPurchase } from "../controllers/purchaseController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPurchase);

export default router;

/**
 * @swagger
 * tags:
 *   name: Purchases
 *   description: Stock purchases
 */

/**
 * @swagger
 * /api/purchases:
 *   post:
 *     summary: Purchase stock (increase quantity)
 *     tags: [Purchases]
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
 *         description: Purchase successful
 */
