import Product from "../models/Product.js";
 //@desc create product

export const createProduct = async (req, res) => {
    try{
        const {name, quantity, costPrice, sellingPrice}=req.body;

        const productExists = await Product.findOne({name});
        if(productExists){
            return res.status(400).json({message: "Product already exists"});
        }

        const product = await Product.create({
            name,
            quantity,
            costPrice,
            sellingPrice,
        });
        res.status(201).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//@desc getProduct

export const getProducts = async (req,res)=> {
    try{
        const products = await Product.find();        
        res.json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//@desc update product

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new:true, runvalidators: true}
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found"});
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}