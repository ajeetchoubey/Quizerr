import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface NavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  answeredCount: number;
  isLoading?: boolean;
}

const Navigation = ({
  currentIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  answeredCount,
  isLoading = false
}: NavigationProps) => {
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const hasAnswered = answeredCount > 0;

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition duration-200"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Answered: <span className="font-semibold">{answeredCount}</span> / {totalQuestions}
        </p>
      </div>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          disabled={!hasAnswered || isLoading}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          <Send className="w-4 h-4" />
          <span>{isLoading ? 'Submitting...' : 'Submit Quiz'}</span>
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navigation;