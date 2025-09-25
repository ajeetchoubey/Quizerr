import { Clock } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
  isActive: boolean;
  formatTime: (seconds: number) => string;
}

const Timer = ({ timeRemaining, isActive, formatTime }: TimerProps) => {
  const isLowTime = timeRemaining <= 10 && timeRemaining > 0;
  
  return (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-bold transition-all duration-300 ${
      isLowTime 
        ? 'bg-red-100 text-red-600 animate-pulse' 
        : isActive 
          ? 'bg-blue-100 text-blue-600' 
          : 'bg-gray-100 text-gray-600'
    }`}>
      <Clock className={`w-5 h-5 ${isLowTime ? 'text-red-600' : isActive ? 'text-blue-600' : 'text-gray-600'}`} />
      <span>{formatTime(timeRemaining)}</span>
    </div>
  );
};

export default Timer;