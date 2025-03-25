import express from 'express';
import { chatWithAI } from '../controllers/geminiController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/chat', protect, chatWithAI);

export default router; 