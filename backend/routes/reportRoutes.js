import express from "express";
import { getProfitReport } from "../controllers/reportControllers.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profit", protect, getProfitReport);

export default router;

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Profit reports
 */

/**
 * @swagger
 * /api/reports/profit:
 *   get:
 *     summary: Get profit report
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [daily, weekly, monthly]
 *     responses:
 *       200:
 *         description: Profit data
 */
