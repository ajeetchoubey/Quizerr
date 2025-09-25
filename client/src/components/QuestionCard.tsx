import type { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | undefined;
  onAnswerSelect: (questionId: number, optionId: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  questionNumber, 
  totalQuestions 
}: QuestionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
          {question.question_text}
        </h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedAnswer === option.id
                ? 'border-blue-500 bg-blue-50 shadow-sm'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onAnswerSelect(question.id, option.id)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-200 ${
              selectedAnswer === option.id
                ? 'border-blue-500 bg-blue-500'
                : 'border-gray-400'
            }`}>
              {selectedAnswer === option.id && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            <span className="text-gray-700 flex-1">{option.option_text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;