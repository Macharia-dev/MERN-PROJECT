/*
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Paypal from "paypal"

const paypal = Paypal(process.env.PAYPAL_SECRET_KEY)

//placing user order from frontend
const placeOrder = async(req,res) => {

    const frontend_url = "http://localhost:5173"
try {
    const newOrder = new orderModel({
        userId:req.body.userId,
        items:req.bodyitems,
        amount:req.body.amount,
        address:req.body.address
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
    
    const line_items = req.body.lineItems.map((item)=>({
        price_data:{
            currency:"USD",
            product_data:{
                name:item.name
                
            },
            unit_amount:item.price

        },
        quantity:item.quantity
    }))
   
    line_items.push({
        price_data:{
            currency:"USD",
            product_data:{
                name:"Delivery Charges"
            },
            unit_amount:2
        },
        quantity:1
    })

    const session = await paypal.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })
    res.json({success:true,session_url:session.url})

} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}

}

export {placeOrder}
*/