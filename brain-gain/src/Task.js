export const Task = (props) => {
  return (
    <div
      className="App"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <li>{props.taskName}</li>
      <button onClick={() => props.completeTask(props.id)}>Completed</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
