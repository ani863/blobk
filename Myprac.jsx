import React, { useEffect, useState } from "react";

const Myprac = () => {
  const [date, setDate] = useState("");
  const [toggle, setToogle] = useState(false);

  const realTimeClock = () => {
    let crdate = new Date();
    let d = crdate.toLocaleTimeString();
    setDate(d);

    let to = crdate.toLocaleTimeString("en-us", {
      hour12: toggle,
    });
    setDate(to)
  };
  useEffect(() => {
    realTimeClock();
    let interval = setInterval(realTimeClock, 1000);
    return () => clearInterval(interval);
  }, [toggle]);
  const toggleData = () => {
    setToogle((prev) => !prev);
  };
  return (
    <div>
      <h1>{date}</h1>
      <button onClick={() => toggleData()}>Toggle</button>
    </div>
  );
};

export default Myprac;
