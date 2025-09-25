export interface Option {
  id: number;
  option_text: string;
}

export interface Question {
  id: number;
  question_text: string;
  options: Option[];
}

export interface QuizResults {
  score: number;
  total: number;
  percentage: number;
  results?: Array<{
    question_id: number;
    question_text: string;
    user_answer: string;
    correct_answer: string;
    is_correct: boolean;
  }>;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: number]: number };
  showResults: boolean;
  score: number;
  loading: boolean;
  error: string | null;
}

export interface TimerOption {
  label: string;
  value: number; // in seconds
  description: string;
}