import "./App.css";
import { User } from "./User";
import { Planet } from "./Planet";
function App() {
  const user = [
    { name: "moses", age: 25 },
    { name: "chidera", age: 25 },
    { name: "obioma", age: 25 },
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(([planets], key) => {
        return <Planet name={planets.name} isGasPlanet={planets.isGasPlanet} />;
      })}
    </div>
  );
}

export default App;
