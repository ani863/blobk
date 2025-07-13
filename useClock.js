// useClock.js
import { useEffect, useState } from "react";

const useClock = () => {
  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const toggleFormat = () => {
    setIs24HourFormat((prev) => !prev);
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: !is24HourFormat,
      });

      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const formattedDay = now.toLocaleDateString("en-US", {
        weekday: "long",
      });

      setTime(formattedTime);
      setDate(formattedDate);
      setDay(formattedDay);
    };

    updateClock(); // show immediately
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [is24HourFormat]);

  return { time, date, day, is24HourFormat, toggleFormat };
};

export default useClock;
