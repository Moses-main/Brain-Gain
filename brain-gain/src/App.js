import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        ShowText
      </button>

      {showText && <Text />}
    </div>
  );
}

export default App;
