import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//@desc Register user
//@route POST /api/auth/register
export const registerUser = async (req,res) => {
    try{
        const {name, email, password} = req.body;

        //check user
        const userExists= await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }

        //Hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //new user
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });
        res.status(201).json({
            message: "User registered successfully"
        });
    }
    catch(error){
        res.status(500).json({message: error.message });
    }
};

//@desc Login
//@route GET/api/auth/login
export const loginUser= async (req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({message: "Invalid credentials"});
        }

        //Generate JWT
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }catch(error){
        res.status(500).json({message: error.message})
    }
};