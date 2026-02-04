import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalRevenue: {
      type: Number,
      required: true
    },
    profit: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", saleSchema);
export default Sale;
