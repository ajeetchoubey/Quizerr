import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { useTimer } from '../hooks/useTimer';
import QuestionCard from '../components/QuestionCard';
import Navigation from '../components/Navigation';
import Timer from '../components/Timer';
import { Loader2 } from 'lucide-react';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const timeLimit = location.state?.timeLimit || 300; // Default to 5 minutes (300 seconds)
  const initialized = useRef(false);
  
  const {
    quizState,
    fetchQuestions,
    handleAnswerSelect,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz
  } = useQuiz();

  const {
    timeRemaining,
    isActive,
    isTimeUp,
    startTimer,
    stopTimer,
    formatTime
  } = useTimer();

  // Initialize quiz and timer only once
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const initializeQuiz = async () => {
        await fetchQuestions();
        startTimer(timeLimit);
      };
      initializeQuiz();
    }
  }, [fetchQuestions, startTimer, timeLimit]);

  // Handle time up
  useEffect(() => {
    if (isTimeUp) {
      handleSubmitQuiz();
    }
  }, [isTimeUp]);

  const handleSubmitQuiz = async () => {
    stopTimer();
    const result = await submitQuiz();
    if (result) {
      navigate('/results', { 
        state: { 
          score: result.score, 
          total: result.total, 
          percentage: result.percentage,
          results: result.results || []
        } 
      });
    }
  };

  // Loading state
  if (quizState.loading && quizState.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (quizState.error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Quiz Error</h2>
          <p className="text-gray-600 mb-6">{quizState.error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const answeredCount = Object.keys(quizState.selectedAnswers).length;

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with timer */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-900">Quizerr</h1>
              <span className="text-sm text-gray-500">
                Full Stack Development Quiz
              </span>
            </div>
            <Timer
              timeRemaining={timeRemaining}
              isActive={isActive}
              formatTime={formatTime}
            />
          </div>
        </div>
      </div>

      {/* Quiz content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={quizState.selectedAnswers[currentQuestion.id]}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={quizState.questions.length}
        />

        <div className="mt-8">
          <Navigation
            currentIndex={quizState.currentQuestionIndex}
            totalQuestions={quizState.questions.length}
            onPrevious={prevQuestion}
            onNext={nextQuestion}
            onSubmit={handleSubmitQuiz}
            answeredCount={answeredCount}
            isLoading={quizState.loading}
          />
        </div>

        {/* Quick navigation grid */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Navigation</h3>
          <div className="grid grid-cols-10 gap-2">
            {quizState.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-8 h-8 rounded text-xs font-semibold transition duration-200 ${
                  index === quizState.currentQuestionIndex
                    ? 'bg-blue-600 text-white'
                    : quizState.selectedAnswers[quizState.questions[index]?.id]
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;