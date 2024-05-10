import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function Main() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/Facts").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      <button>Genereate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
