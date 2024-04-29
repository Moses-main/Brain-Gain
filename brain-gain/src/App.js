import "./App.css";
// importing a component
// import { Planet } from "./Planet";

// importing a state
import { useState } from "react";

function App() {
  // initializing a state
  // const [age, setAge] = useState(0); //creating a use state
  //
  // function to increment the age
  // const agePlus = () => {
  //   setAge(age + 1);
  //   console.log(age);
  // };

  // // initializing a state for words/alphabet
  // const [name, setName] = useState(" ");
  // const displayText = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // };

  // const [showText, setShowText] = useState(true);

  // // changing the color of the page content
  // const [mode, setMode] = useState(" ");

  // const changeMode = () => {
  //   setMode((document.getElementById("App").style.backgroundColor = "black"));
  // };

  // SOLUTION TO EXERCISES
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Zero = () => {
    setCount(0);
  };
  return (
    <div className="App">
      {/* ############################# */}
      {/* This is the solution to the exercise */}
      {count}
      <br></br>
      <button onClick={Increase}> Increase</button>
      <button onClick={Decrease}> Decrease</button>
      <button onClick={Zero}>Set to Zero</button>
      {/* ############################## */}

      {/* {name}
      <input type="text" onChange={displayText} />
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        toggle
      </button>
      {showText && <h1>My name is Moses</h1>}

      {/* Change the bgcolor of the page */}
      {/* <button onClick={changeMode}>toggle mode</button> */}
    </div>
    // ); */}
  );
}

export default App;
