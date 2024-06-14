import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, [toggle]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [toggle]);

  function HandleClick(event) {
    event.preventDefault();
    setToggle((prevToggle) => !prevToggle);
  }
  return (
    <div className="App">
      {toggle && <h1>hello</h1>}
      <button onClick={HandleClick}>Increase</button>
    </div>
  );
}

export default App;
