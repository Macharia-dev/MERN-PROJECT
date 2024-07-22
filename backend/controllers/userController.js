import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bycryt from "bcrypt"
import validator from "validator"


//login user

  const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.json({
                success:false,
                message:"User does not exist"
            })
            
        }
        const isMatch = await bycryt.compare(password,user.password);
        if (!isMatch) {
            return res.json({
                success:false,
                message:"Incorrect password"
            })
            
        }
        const token = createToken(user._id)
        res.json({
            success:true,
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
        
    }

}
const createToken = (id) =>{
    return jwt.sign({id},process.env.Jwt_SECRET)
}

//register user

const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        //check if user already
        const exists = await UserModel.findOne({email});
        if (exists) {
            return res.json({
                success:false,
                message:"User already exist"
            })
            
        }
        //check if email is valid & strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Please enter a valid email address"
            })
            
        }
        if (password.length<8) {
           return res.json({success:false, message:"Please enter a strong password"})

        }



        //hash password
        const salt = await bycryt.genSalt(10)
        const hashedPassword = await bycryt.hash(password,salt);

        const newUser = new UserModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({
            success:true,token
            
        })
    }
    catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"Error creating user"
        })
    }

}


export {loginUser, registerUser}