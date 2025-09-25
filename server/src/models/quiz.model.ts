// Base interfaces for our application
export interface Question {
  id: number;
  question_text: string;
  created_at: string;
}

export interface Option {
  id: number;
  question_id: number;
  option_text: string;
  is_correct: boolean;
}

export interface QuestionWithOptions extends Question {
  options: Omit<Option, 'is_correct'>[];  // Don't expose correct answers to frontend
}

export interface QuestionForScoring extends Question {
  options: Option[];  // Full options for backend scoring
}

export interface UserAnswer {
  question_id: number;
  selected_option_id: number;
}

export interface QuizResult {
  score: number;
  total_questions: number;
  percentage: number;
  results: Array<{
    question_id: number;
    question_text: string;
    user_answer: string;
    correct_answer: string;
    is_correct: boolean;
  }>;
}

export interface QuizStats {
  total_questions: number;
  quiz_name: string;
  description: string;
}