import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime === 10 ? 0 : prevTime + 1;
        console.log(newTime);
        document.title = `${newTime} in seconds`;
        return newTime;
      });
    }, 1000);

    return () => {
      console.log("clear");
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="App">
      <h1> {time} in time-seconds </h1>
    </div>
  );
}

export default App;
