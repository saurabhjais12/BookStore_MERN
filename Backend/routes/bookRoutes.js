// routes/bookRoutes.js
import express from 'express';
import { getAllBooks, uploadBook } from '../controllers/bookController.js';

const router = express.Router();

// POST /api/upload
router.post('/upload', uploadBook);
router.get('/books', getAllBooks);

export default router;
