import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionResultProps {
  questionNumber: number;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const QuestionResult = ({ 
  questionNumber, 
  questionText, 
  userAnswer, 
  correctAnswer, 
  isCorrect 
}: QuestionResultProps) => {
  return (
    <div className={`p-4 border-2 rounded-lg ${
      isCorrect 
        ? 'border-green-200 bg-green-50' 
        : 'border-red-200 bg-red-50'
    }`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Question {questionNumber}
            </span>
            <span className={`text-sm font-semibold ${
              isCorrect ? 'text-green-600' : 'text-red-600'
            }`}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </span>
          </div>
          
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            {questionText}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-xs font-medium text-gray-500 mt-0.5">Your answer:</span>
              <span className={`text-xs font-medium ${
                isCorrect ? 'text-green-700' : 'text-red-700'
              }`}>
                {userAnswer}
              </span>
            </div>
            
            {!isCorrect && (
              <div className="flex items-start space-x-2">
                <span className="text-xs font-medium text-gray-500 mt-0.5">Correct answer:</span>
                <span className="text-xs font-medium text-green-700">
                  {correctAnswer}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;