import Sale from "../models/Sale.js";
import Product from "../models/Product.js";

export const createSale = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    const totalRevenue = quantity * product.sellingPrice;
    const totalCost = quantity * product.costPrice;
    const profit = totalRevenue - totalCost;

    // Reduce stock
    product.quantity -= quantity;
    await product.save();

    // Save sale
    const sale = await Sale.create({
      product: productId,
      quantity,
      totalRevenue,
      profit
    });

    res.status(201).json({
      message: "Sale successful",
      sale,
      remainingStock: product.quantity
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};