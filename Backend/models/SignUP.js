import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email: String,
    phone: String,
    password:String,
    re_password: String,
} );
export default mongoose.model("SignUp", signUpSchema);
