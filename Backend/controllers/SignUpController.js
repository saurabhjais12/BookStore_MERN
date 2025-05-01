import SignUp from "../models/SignUP.js";

const SignUpController = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password, re_password}=req.body;
        const newSignUp = new SignUp({
            firstname,
            lastname,
            email,
            phone,
            password,
            re_password
        })
        await newSignUp.save();
        res.status(201).json({
            message:"SignUp successful",
            signUp:newSignUp
        })

        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Error saving SignUp"
        })
    }
}
export default SignUpController;
