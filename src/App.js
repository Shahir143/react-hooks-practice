import React, { useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(null);

  const result = useMemo(() => {
    return inputValue * inputValue;
  }, [inputValue]);
  function calculate() {
    const num = parseFloat(inputRef.current.value) || 0;
    console.log("loop started");
    setInputValue(num);
  }

  return (
    <div className="App">
      <input type="number" ref={inputRef} />
      <h1>{result}</h1>
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
