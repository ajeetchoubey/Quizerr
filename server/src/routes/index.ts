import { Router } from 'express';
import quizRoutes from './quiz.routes';

const router = Router();

// Mount all route modules
router.use('/api', quizRoutes);

export default router;