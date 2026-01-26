import Sale from "../models/Sale.js";

export const getProfitReport = async (req, res) => {
    try {
        const {period} = req.query;

        let startDate = new Date();

        if (period === "daily") startDate.setDate(startDate.getDate() - 1);
        if (period === "weekly") startDate.setDate(startDate.getDate() - 7);
        if (period === "monthly") startDate.setMonth(startDate.getMonth() - 1);

        const sales = await Sale.find({ createdAt: {$gte: startDate}});

        const totalProfit = sales.reduce((sum,sale) => sum + sale.profit, 0);

        res.json({
            period,
            totalProfit,
            salesCount: sales.length
        });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}