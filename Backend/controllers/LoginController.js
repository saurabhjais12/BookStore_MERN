import SignUP from "../models/SignUP.js";
import jwt from "jsonwebtoken";

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await SignUP.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // ✅ Create JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },   // payload
            "your_secret_key_here",                // secret key
            { expiresIn: "1h" }                     // options (token valid for 1 hour)
        );

        // Successful login
        res.status(200).json({ 
            message: "Login successful", 
            token: token   // ✅ now sending token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during login" });
    }
};

export default LoginController;
