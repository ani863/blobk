// DisplayCurrentTime.js
import React from "react";
import useClock from "../hook/useClock";

const DisplayCurrentTime = () => {
  const { time, date, day, is24HourFormat, toggleFormat } = useClock();

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>Real-Time Clock</h1>
      <p style={{ fontSize: "2rem" }} aria-live="polite">{time}</p>
      <p>{day}, {date}</p>
      <button onClick={toggleFormat}>
        Switch to {is24HourFormat ? "12-hour" : "24-hour"} format
      </button>
    </div>
  );
};

export default DisplayCurrentTime;
