import { useState, useCallback } from 'react';
import type { QuizState, QuizResults } from '../types/quiz';

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswers: {},
    showResults: false,
    score: 0,
    loading: false,
    error: null
  });

  // Fetch questions from API
  const fetchQuestions = useCallback(async () => {
    setQuizState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await fetch('http://localhost:5000/api/quiz/questions');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuizState(prev => ({
        ...prev,
        questions: data.questions,
        loading: false
      }));
    } catch (error) {
      setQuizState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      }));
    }
  }, []); // Empty dependency array since this function doesn't depend on any external values

  // Handle answer selection
  const handleAnswerSelect = useCallback((questionId: number, optionId: number) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: optionId
      }
    }));
  }, []);

  // Navigate to next question
  const nextQuestion = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(prev.currentQuestionIndex + 1, prev.questions.length - 1)
    }));
  }, []);

  // Navigate to previous question
  const prevQuestion = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(prev.currentQuestionIndex - 1, 0)
    }));
  }, []);

  // Go to specific question
  const goToQuestion = useCallback((index: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: index
    }));
  }, []);

  // Submit quiz
  const submitQuiz = useCallback(async (): Promise<QuizResults | null> => {
    return new Promise((resolve) => {
      setQuizState(prev => {
        const currentAnswers = prev.selectedAnswers;
        
        // Convert answers object to array format expected by backend
        const answersArray = Object.entries(currentAnswers).map(([questionId, optionId]) => ({
          question_id: parseInt(questionId),
          selected_option_id: optionId
        }));
        
        // Set loading state
        const newState = { ...prev, loading: true };
        
        // Perform the API call asynchronously
        (async () => {
          try {
            console.log('🚀 Submitting quiz with answers:', answersArray);
            
            const response = await fetch('http://localhost:5000/api/quiz/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ answers: answersArray }),
            });

            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Failed to submit quiz: ${errorText}`);
            }

            const result = await response.json();
            console.log('✅ Quiz submission result:', result);
            
            // Transform backend response to match our frontend QuizResults interface
            const quizResults: QuizResults = {
              score: result.score,
              total: result.total_questions,
              percentage: result.percentage,
              results: result.results || []
            };
            
            setQuizState(prevState => ({
              ...prevState,
              score: quizResults.score,
              showResults: true,
              loading: false
            }));

            resolve(quizResults);
          } catch (error) {
            console.error('❌ Quiz submission error:', error);
            setQuizState(prevState => ({
              ...prevState,
              loading: false,
              error: error instanceof Error ? error.message : 'Failed to submit quiz'
            }));
            resolve(null);
          }
        })();
        
        return newState;
      });
    });
  }, []);

  // Reset quiz
  const resetQuiz = useCallback(() => {
    setQuizState({
      questions: [],
      currentQuestionIndex: 0,
      selectedAnswers: {},
      showResults: false,
      score: 0,
      loading: false,
      error: null
    });
  }, []);

  return {
    quizState,
    fetchQuestions,
    handleAnswerSelect,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    resetQuiz
  };
};