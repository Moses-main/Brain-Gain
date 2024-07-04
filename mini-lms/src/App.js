import "./App.css";
import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
// import StateArray from "../src/components/StateArray";
// import DependentEffect from "../src/components/DependentEffect";
// import LoadDataFromServer from "../src/components/LoadDataFromServer";
// import Component from "../src/components/Ref";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>{count} times</p>
    </div>
  );
}

// function that handles the use effect state
// const CounterWithNameAndSideEffect = () => {};

export default App;
