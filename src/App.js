import React from "react";
import "./App.css";
import LoginProvider from "./createContext";
import SinglePost from "./singlePost";

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <SinglePost />
      </div>
    </LoginProvider>
  );
}

export default App;
