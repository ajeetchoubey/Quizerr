import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, Play } from 'lucide-react';
import type { TimerOption } from '../types/quiz';

const TimeSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState<number | null>(300); // Default to 5 minutes

  const timeOptions: TimerOption[] = [
    {
      label: '3 Minutes',
      value: 180,
      description: 'Quick challenge'
    },
    {
      label: '5 Minutes',
      value: 300,
      description: 'Recommended ⭐'
    },
    {
      label: '10 Minutes',
      value: 600,
      description: 'Relaxed pace'
    }
  ];

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
  };

  const handleStartQuiz = () => {
    if (selectedTime) {
      navigate('/quiz', { state: { timeLimit: selectedTime } });
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Choose Your Time Limit
              </h1>
              <p className="text-gray-600">
                Select how much time you want for the entire quiz
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {timeOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleTimeSelect(option.value)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedTime === option.value
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : option.value === 300 // 5 minutes - recommended
                      ? 'border-blue-300 bg-blue-50 hover:border-blue-400'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedTime === option.value
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-400'
                      }`}>
                        {selectedTime === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold text-gray-900">{option.label}</h3>
                          {option.value === 300 && (
                            <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">
                    Important Note
                  </h3>
                  <div className="mt-1 text-sm text-amber-700">
                    <p>• Timer will start immediately after clicking "Start Quiz"</p>
                    <p>• Quiz will auto-submit when time runs out</p>
                    <p>• You can navigate between questions freely</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleGoBack}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <button
                onClick={handleStartQuiz}
                disabled={!selectedTime}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelectionPage;