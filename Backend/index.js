// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudinary from 'cloudinary';

import bookRoutes from './routes/bookRoutes.js';
import contactRoutes from './routes/routecontact.js';  // Your contact form routes

//Deploy
// import path from 'path';
// Config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;


//Deply
const __dirname=path.resolve();


// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,  // Don't forget api_secret also if needed
});

// Get __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Middleware
const coresOption ={
  origin:"https://bookstore-mern-jrsz.onrender.com",
  Credentials:true
}
app.use(cors());
app.use(express.json(coresOption));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', bookRoutes);
app.use('/api', contactRoutes);

// MongoDB connection
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

//Deploy
app.use(express.static(path.join(__dirname,"/Frontend/dist")))
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
})
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
