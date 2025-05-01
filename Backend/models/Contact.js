import mongoose from "mongoose";
const contactSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String,
})

export default mongoose.model("contact",contactSchema);