import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Trophy, RotateCcw, Home, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import QuestionResult from '../components/QuestionResult';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  
  const { 
    score = 0, 
    total = 100, 
    percentage = 0, 
    results = [] 
  } = location.state || {};

  const getGradeInfo = (percent: number) => {
    if (percent >= 90) return { 
      grade: 'A+', 
      color: 'text-green-600', 
      bgColor: 'bg-green-500',
      emoji: '🏆',
      message: 'Excellent! You\'re a full-stack expert!'
    };
    if (percent >= 80) return { 
      grade: 'A', 
      color: 'text-green-500', 
      bgColor: 'bg-green-400',
      emoji: '🎉',
      message: 'Great job! You have solid understanding!'
    };
    if (percent >= 70) return { 
      grade: 'B', 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-500',
      emoji: '👏',
      message: 'Good work! Keep practicing!'
    };
    if (percent >= 60) return { 
      grade: 'C', 
      color: 'text-yellow-500', 
      bgColor: 'bg-yellow-500',
      emoji: '👍',
      message: 'Not bad! Room for improvement!'
    };
    return { 
      grade: 'D', 
      color: 'text-red-500', 
      bgColor: 'bg-red-500',
      emoji: '📚',
      message: 'Keep studying and you\'ll improve!'
    };
  };

  const gradeInfo = getGradeInfo(percentage);
  
  const handleRetakeQuiz = () => {
    navigate('/time-selection');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  // If no results data, redirect to home
  if (!location.state) {
    navigate('/');
    return null;
  }

  const correctAnswers = results.filter((result: any) => result.is_correct);
  const incorrectAnswers = results.filter((result: any) => !result.is_correct);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Results Card */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg transform -skew-y-1 sm:skew-y-0 sm:-rotate-1 sm:rounded-3xl"></div>
          <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl">
            <div className="max-w-md mx-auto text-center">
              {/* Results Header */}
              <div className="text-6xl mb-4">{gradeInfo.emoji}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Quiz Complete!</h1>
              
              {/* Score Display */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className={gradeInfo.color}>{percentage}%</span>
                </div>
                <div className="text-lg text-gray-600 mb-4">
                  {score} out of {total} correct
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-bold ${gradeInfo.bgColor}`}>
                  Grade: {gradeInfo.grade}
                </div>
              </div>

            {/* Encouraging message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 font-medium">{gradeInfo.message}</p>
              {total < 100 && (
                <p className="text-blue-600 text-sm mt-2">
                  💡 You answered {total} out of 100 questions. Try completing more questions next time for a comprehensive assessment!
                </p>
              )}
            </div>            {/* Detailed breakdown */}
            <div className="space-y-4 text-left mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Correct Answers:
                </span>
                <span className="font-semibold text-green-600">{score}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Incorrect Answers:</span>
                <span className="font-semibold text-red-600">{total - score}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Questions Attempted:</span>
                <span className="font-semibold">{total}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Available:</span>
                <span className="font-semibold text-blue-600">100</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Accuracy:</span>
                <span className="font-semibold">{percentage}%</span>
              </div>
            </div>              {/* Show Details Toggle */}
              {results.length > 0 && (
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full mb-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Hide Question Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Show Question Details
                    </>
                  )}
                </button>
              )}

              {/* Action buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleRetakeQuiz}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </button>
                <button
                  onClick={handleGoHome}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </button>
              </div>

              {/* Achievement badge */}
              {percentage >= 80 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-white">
                  <Trophy className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-bold">Achievement Unlocked!</p>
                  <p className="text-sm">Full-Stack Knowledge Master</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Question Details */}
        {showDetails && results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Question by Question Results
            </h2>

            {/* Summary tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              <div className="flex-1 text-center py-2 bg-green-100 text-green-800 rounded font-semibold">
                ✓ Correct ({correctAnswers.length})
              </div>
              <div className="flex-1 text-center py-2 bg-red-100 text-red-800 rounded font-semibold">
                ✗ Incorrect ({incorrectAnswers.length})
              </div>
            </div>

            {/* All results */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {results.map((result: any, index: number) => (
                <QuestionResult
                  key={result.question_id}
                  questionNumber={index + 1}
                  questionText={result.question_text}
                  userAnswer={result.user_answer}
                  correctAnswer={result.correct_answer}
                  isCorrect={result.is_correct}
                />
              ))}
            </div>

            {/* Close details button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowDetails(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
              >
                Hide Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;