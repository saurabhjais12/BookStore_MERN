// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Book', bookSchema);

