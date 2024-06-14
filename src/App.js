import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  let setName = useRef(null);
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    console.log(setName.current.value);
  }

  return (
    <div className="App">
      <input type="text" ref={setName} />
      <h1>
        {setName.current ? setName.current.value : "No One"} has Clicked {count}{" "}
        times
      </h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
