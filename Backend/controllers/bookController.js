// controllers/bookController.js
import Book from '../models/Book.js';

// Upload a new book
export const uploadBook = async (req, res) => {
  try {
    const { name, title, price, category, description, image } = req.body;

    // Validation
    if (!name || !title || !price || !category || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new book
    const newBook = new Book({
      name,
      title,
      price,
      category,
      description,
      image,
    });

    // Save to DB
    await newBook.save();

    res.status(201).json({ message: 'Book uploaded successfully!' });
  } catch (error) {
    console.error('Error uploading book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);     
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error fetching books.' });
  }
};
