// hooks/useStopwatch.js
import { useState, useRef } from 'react';

const useStopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const intervalRef = useRef(null);

  const updateTime = () => {
    setTime((prev) => {
      let { hr, min, sec, milli } = prev;

      milli++;
      if (milli === 100) {
        milli = 0;
        sec++;
      }
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (min === 60) {
        min = 0;
        hr++;
      }

      return { hr, min, sec, milli };
    });
  };

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(updateTime, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  return { time, start, stop, reset };
};

export default useStopwatch;
