// components/Stopwatch.js
import React from 'react';
import useStopwatch from '../hooks/useStopwatch';

const Stopwatch = () => {
  const { time, start, stop, reset } = useStopwatch();

  return (
    <div className="container">
      <h1>
        {`${time.hr.toString().padStart(2, '0')} : 
          ${time.min.toString().padStart(2, '0')} : 
          ${time.sec.toString().padStart(2, '0')} : 
          ${time.milli.toString().padStart(2, '0')}`}
      </h1>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
