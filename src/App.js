import React, { useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }

  function handleName(e) {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  return (
    <div className="App">
      <input type="text" onChange={handleName} />
      <h1>
        {details.name} has Clicked {details.counter}
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default App;
