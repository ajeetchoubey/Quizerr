import { useState, useEffect, useCallback } from 'react';

export const useTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  // Start timer with specified duration (in seconds)
  const startTimer = useCallback((duration: number) => {
    setTimeRemaining(duration);
    setIsActive(true);
    setIsTimeUp(false);
  }, []);

  // Stop timer
  const stopTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  // Reset timer
  const resetTimer = useCallback(() => {
    setTimeRemaining(0);
    setIsActive(false);
    setIsTimeUp(false);
  }, []);

  // Format time for display (MM:SS)
  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: number | null = null;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            setIsActive(false);
            setIsTimeUp(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeRemaining]);

  return {
    timeRemaining,
    isActive,
    isTimeUp,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime
  };
};