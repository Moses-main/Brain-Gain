import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  // "DO HOMEWORKS ";
  // "WASH DISHES";
  //
  const [todoList, setTodoList] = useState([]);

  // State to represent the input value
  const [newTask, setNewTask] = useState("");

  // function for getting the value of the
  // input value from the input element
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // function for adding new task to the list of
  // array
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    // adding the newtask to the old todolist using a spread operator
    // let newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);

    setTodoList([...todoList, task]);
  };

  // The function to  delete task from the list
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
      // This is equivalent to the code below
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
    });

    setTodoList(newTodoList);
  };

  // This is for updating the tasks list
  const completeTask = (id) => {
    todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="addTask">
        <input onChange={handleChange} />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
