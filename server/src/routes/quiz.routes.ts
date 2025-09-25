import { Router } from 'express';
import { QuizController } from '../controllers/quiz.controller';
import { QuizService } from '../services/quiz.service';
import { db } from '../database';

const router = Router();

// Initialize service and controller
const quizService = new QuizService(db);
const quizController = new QuizController(quizService);

// Health check route
router.get('/health', quizController.health);

// Quiz routes
router.get('/quiz/questions', quizController.getQuestions);
router.post('/quiz/submit', quizController.submitQuiz);
router.get('/quiz/stats', quizController.getStats);

export default router;