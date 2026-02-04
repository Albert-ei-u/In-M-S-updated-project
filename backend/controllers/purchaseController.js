import Purchase from "../models/Purchase.js";
import Product from "../models/Product.js";

//new purchase

export const createPurchase = async (req, res)=>{
    try{
        const {productId,quantity} = req.body;

        //Product finding
        const product = await Product.findById(productId);
        
        if(!product){
            res.status(400).json({message: "Product not found"});
        }

        //Total cost
        const totalCost = quantity * product.costPrice;
        
        //save purchase
        const purchase = await Purchase.create({
            product: productId,
            quantity,
            totalCost
        });

        //stock increase
        product.quantity += quantity
        await product.save();

        res.status(201).json({
            message: "Purchase successful",
            purchase,
            updatedStock: product.quantity
        });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};