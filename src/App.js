import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const todoDone = (index) => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList list={todoList} todoDone={todoDone} />
      </header>
    </div>
  );
}

export default App;
