import mongoose from "mongoose";

const ordeSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Object,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"On process"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const OrderModel = mongoose.models.order || mongoose.model("Order", ordeSchema);

export default OrderModel;