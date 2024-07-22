import FoodModel from "../models/foodmodel.js";
import fs from 'fs'

//add food

const addFood = async (req,res) => {
  
    let image_filename = `${req.file.filename}`;

    const food = new FoodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:" Error saving"})
    }
}
//all food list
const listFood = async (req,res) =>{
 try {
    const foods = await FoodModel.find({});
    res.json({success:true,data:foods})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
 }
}
//remove food item
const removeFood = async(req,res) =>{
try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food Deleted"})
} catch (error) {
  console.log(error);
  res.json({success:false,message:"Error"})  
}
}






export {addFood,listFood,removeFood}