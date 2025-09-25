import { Request, Response } from 'express';
import { QuizService } from '../services/quiz.service';
import { UserAnswer } from '../models/quiz.model';

export class QuizController {
  constructor(private quizService: QuizService) {}

  /**
   * Health check endpoint
   */
  health = (req: Request, res: Response): void => {
    res.json({ 
      message: '🚀 Quiz Server is running!', 
      timestamp: new Date().toISOString(),
      status: 'healthy'
    });
  };

  /**
   * Get all quiz questions (without correct answers)
   * GET /api/quiz/questions
   */
  getQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log('📋 Fetching quiz questions...');
      
      const result = await this.quizService.getQuizQuestions();
      
      console.log(`✅ Fetched ${result.questions.length} questions`);
      res.json(result);
    } catch (error) {
      console.error('❌ Error fetching questions:', error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  };

  /**
   * Submit quiz answers and calculate score
   * POST /api/quiz/submit
   */
  submitQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
      const { answers }: { answers: UserAnswer[] } = req.body;
      
      console.log('📝 Processing quiz submission...');
      
      // Validation
      if (!answers || !Array.isArray(answers) || answers.length === 0) {
        res.status(400).json({ error: 'Invalid answers format' });
        return;
      }

      // Validate answer structure
      for (const answer of answers) {
        if (!answer.question_id || !answer.selected_option_id) {
          res.status(400).json({ 
            error: 'Each answer must have question_id and selected_option_id' 
          });
          return;
        }
      }

      const result = await this.quizService.calculateScore(answers);
      
      console.log(`✅ Quiz completed! Score: ${result.score}/${result.total_questions} (${result.percentage}%)`);
      res.json(result);
    } catch (error) {
      console.error('❌ Error processing quiz submission:', error);
      res.status(500).json({ error: 'Failed to process submission' });
    }
  };

  /**
   * Get quiz statistics
   * GET /api/quiz/stats
   */
  getStats = async (req: Request, res: Response): Promise<void> => {
    try {
      const stats = await this.quizService.getQuizStats();
      res.json(stats);
    } catch (error) {
      console.error('❌ Error fetching quiz stats:', error);
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  };
}