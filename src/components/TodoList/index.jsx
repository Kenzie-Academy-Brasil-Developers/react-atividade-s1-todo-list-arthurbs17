import "./index.css";
import { FaCheck } from "react-icons/fa";
const TodoList = ({ list, todoDone }) => {
  return (
    <div className="todo_list">
      <ul>
        {list.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => todoDone(index)}>
              <FaCheck />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
