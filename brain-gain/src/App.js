import "./App.css";

// function App() {
//   // const name = "Moses Sunday";
//   return (
//     <div className="App">
//       <p>This is a component</p>
//       <GetName />
//       <p>This is a prop</p>
//       <User name="Moses" age={25} email="moseschizaram8@gmail.com" />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={90000} position="Project Manager" company="Netflix" />
    </div>
  );
}

function Job(props) {
  return (
    <div className="User">
      <h4>{props.salary}</h4>
      <h4>{props.position}</h4>
      <h4>{props.company}</h4>
    </div>
  );
}
function GetName() {
  return (
    <div>
      <h1>Pedro</h1>
      <h1>21</h1>
      <h1>moseschizaram8@gamil.com</h1>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};
export default App;
