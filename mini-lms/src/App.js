import "./App.css";
import "./index.css";
// import StateArray from "../src/components/StateArray";
import DependentEffect from "../src/components/DependentEffect";
import LoadDataFromServer from "../src/components/LoadDataFromServer";
import Component from "../src/components/Ref";

function App() {
  return (
    <div className="App">
      {/* <StateArray /> */}
      <Component />

      {/* Testing for useEffect Hook */}
      <DependentEffect />
      <br />
      <LoadDataFromServer />
    </div>
  );
}

export default App;
