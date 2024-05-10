import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [guessAge, setGuessAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setGuessAge(res.data);
    });
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Enter name to generate age"
      />
      <button onClick={fetchData}>Guess Age</button>
      <h4>Name:{guessAge?.name}</h4>
      <h4>Predicted Age:{guessAge?.age}</h4>
      <h4>Count:{guessAge?.count}</h4>
    </div>
  );
}

export default App;

// useEffect(() => {
//   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//     setAge(res.data);
//   });
// }, []);
