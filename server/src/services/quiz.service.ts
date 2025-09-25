import { Database } from 'sqlite3';
import { 
  Question, 
  QuestionWithOptions, 
  QuestionForScoring, 
  UserAnswer, 
  QuizResult,
  QuizStats 
} from '../models/quiz.model';

export class QuizService {
  constructor(private db: Database) {}

  /**
   * Fisher-Yates shuffle algorithm to randomize array order
   */
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Get all quiz questions without correct answers (for frontend)
   */
  async getQuizQuestions(): Promise<{ questions: QuestionWithOptions[]; total: number }> {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT q.id, q.question_text, q.created_at
        FROM questions q
        ORDER BY q.id
      `;
      
      this.db.all(query, (err, questions: Question[]) => {
        if (err) {
          reject(err);
          return;
        }

        if (questions.length === 0) {
          resolve({ questions: [], total: 0 });
          return;
        }

        // Get options for each question (without is_correct field)
        let processedQuestions = 0;
        const questionsWithOptions: QuestionWithOptions[] = [];

        questions.forEach((question) => {
          this.db.all(
            'SELECT id, option_text FROM options WHERE question_id = ? ORDER BY id',
            [question.id],
            (err, options: any[]) => {
              if (!err) {
                // Shuffle the options to randomize their order
                const shuffledOptions = this.shuffleArray(options.map(opt => ({
                  id: opt.id,
                  question_id: question.id,
                  option_text: opt.option_text
                })));

                questionsWithOptions.push({
                  ...question,
                  options: shuffledOptions
                });
              }
              
              processedQuestions++;
              if (processedQuestions === questions.length) {
                questionsWithOptions.sort((a, b) => a.id - b.id);
                resolve({ questions: questionsWithOptions, total: questionsWithOptions.length });
              }
            }
          );
        });
      });
    });
  }

  /**
   * Calculate quiz score based on user answers
   */
  async calculateScore(answers: UserAnswer[]): Promise<QuizResult> {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT q.id, q.question_text, o.id as option_id, o.option_text, o.is_correct
        FROM questions q
        JOIN options o ON q.id = o.question_id
        ORDER BY q.id, o.id
      `;

      this.db.all(query, (err, rows: any[]) => {
        if (err) {
          reject(err);
          return;
        }

        // Group options by question
        const questionMap = new Map<number, QuestionForScoring>();
        
        rows.forEach(row => {
          if (!questionMap.has(row.id)) {
            questionMap.set(row.id, {
              id: row.id,
              question_text: row.question_text,
              created_at: '',
              options: []
            });
          }
          
          questionMap.get(row.id)?.options.push({
            id: row.option_id,
            question_id: row.id,
            option_text: row.option_text,
            is_correct: Boolean(row.is_correct)
          });
        });

        // Calculate score
        let score = 0;
        const results: QuizResult['results'] = [];
        const attemptedQuestions = answers.length; // Only count attempted questions

        for (const answer of answers) {
          const question = questionMap.get(answer.question_id);
          if (!question) continue;

          const correctOption = question.options.find(opt => opt.is_correct);
          const userOption = question.options.find(opt => opt.id === answer.selected_option_id);
          const isCorrect = answer.selected_option_id === correctOption?.id;

          if (isCorrect) score++;

          results.push({
            question_id: question.id,
            question_text: question.question_text,
            user_answer: userOption?.option_text || 'No answer',
            correct_answer: correctOption?.option_text || 'Unknown',
            is_correct: isCorrect
          });
        }

        // Calculate percentage based on attempted questions, not total questions in DB
        const percentage = attemptedQuestions > 0 ? Math.round((score / attemptedQuestions) * 100) : 0;

        const result: QuizResult = {
          score,
          total_questions: attemptedQuestions, // Use attempted questions, not total DB questions
          percentage,
          results
        };

        resolve(result);
      });
    });
  }

  /**
   * Get quiz statistics
   */
  async getQuizStats(): Promise<QuizStats> {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT COUNT(*) as total_questions FROM questions', (err, row: any) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          total_questions: row.total_questions,
          quiz_name: 'Full-Stack Web Development Quiz',
          description: 'Test your knowledge of HTML, CSS, JavaScript, React, Node.js, and databases!'
        });
      });
    });
  }
}