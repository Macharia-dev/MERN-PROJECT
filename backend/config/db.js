import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://davidmacharia:08220201002@cluster0.seunwbt.mongodb.net/food-delivery').then(()=>{
        console.log("connected to db")
    });
}