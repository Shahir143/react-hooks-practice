import React, { useRef, useReducer } from "react";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";
const initialState = { count: 0 };
const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };

    case ACTION.DECREASE:
      return { count: state.count > 0 ? state.count - 1 : 0 };

    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increaseCount() {
    dispatch({ type: ACTION.INCREASE });
  }
  function DecreaseCount() {
    dispatch({ type: ACTION.DECREASE });
  }

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Increase</button>
    </div>
  );
}

export default App;
