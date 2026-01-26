import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    quantity: {
      type: Number,
      default: 0
    },
    costPrice: {
      type: Number,
      required: true
    },
    sellingPrice: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
