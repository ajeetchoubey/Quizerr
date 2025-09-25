import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Users, Award } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/time-selection');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Quizerr! 🚀
              </h1>
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p className="text-center">
                  Test your knowledge with 100 comprehensive full-stack development questions covering:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>HTML & CSS Fundamentals</li>
                  <li>JavaScript & ES6+</li>
                  <li>React & Modern Frontend</li>
                  <li>Node.js & Backend Development</li>
                  <li>Database Design & SQL</li>
                </ul>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">100 Questions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Timed Quiz</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600">Instant Results</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-800">Quiz Features:</span>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 100 comprehensive questions</li>
                    <li>• 3-10 minutes timing options</li>
                    <li>• Real-time progress tracking</li>
                    <li>• Instant detailed results</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 text-center">
                <button
                  onClick={handleStartQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105 shadow-md"
                >
                  Start Quiz →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;