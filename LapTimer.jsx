import React, { useState, useRef, useEffect } from "react";

const LapTimer = () => {
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String((ms % 1000) / 10).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const handleLap = () => {
    if (!isRunning) return;
    const lapTime = laps.length === 0 ? time : time - laps.reduce((a, b) => a + b, 0);
    setLaps([...laps, lapTime]);
  };

  const handleReset = () => {
    setTime(0);
    setLaps([]);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const fastestLap = Math.min(...laps);
  const slowestLap = Math.max(...laps);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h2>Lap Timer</h2>
      <h1>{formatTime(time)}</h1>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleLap} disabled={!isRunning}>
        Lap
      </button>
      <button onClick={handleReset}>Reset</button>

      <h3>Laps</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {laps.map((lap, index) => {
          const isFastest = lap === fastestLap && laps.length > 1;
          const isSlowest = lap === slowestLap && laps.length > 1;

          let color = "black";
          if (isFastest) color = "green";
          if (isSlowest) color = "red";

          return (
            <li key={index} style={{ color }}>
              Lap {index + 1}: {formatTime(lap)}{" "}
              {isFastest && "🔺 Fastest"} {isSlowest && "🔻 Slowest"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LapTimer;
