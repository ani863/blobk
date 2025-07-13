// Stopwatch.js
import React from "react";
import useStopwatch from "../hook/useStopwatch";

const Stopwatch = () => {
  const { time, isRunning, start, pause, reset } = useStopwatch();

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <p style={{ fontSize: "2rem", fontVariantNumeric: "tabular-nums" }}>{time}</p>
      <div style={{ marginTop: "10px" }}>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
        <button onClick={reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
