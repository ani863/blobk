// useStopwatch.js
import { useEffect, useRef, useState } from "react";

const useStopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0); // in ms
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    startTimeRef.current = null;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 50); // update every 50ms for smooth display
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const milliseconds = ms % 1000;
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
  };

  return {
    time: formatTime(elapsedTime),
    isRunning,
    start,
    pause,
    reset,
  };
};

export default useStopwatch;
