import { useState } from "react";
import "./index.css";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="todo_input">
      <input
        placeholder="Insira sua atividade"
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Enviar tarefa</button>
    </div>
  );
};

export default Form;
