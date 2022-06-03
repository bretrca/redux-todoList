import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
import { switchTodoDone } from "../redux/doneTodo";
import { addDeleted } from "../redux/deletedTodos";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompletedClick = () => {
    dispatch(toggleTodo({ id: id, completed: !completed }));
    dispatch(switchTodoDone({ id, title, completed: !completed }));
    dispatch(deleteTodo({ id: id }));
  };
  const handleDeleteTodo = () => {
    dispatch(addDeleted({ id, title, completed }));
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="m-3  "
            checked={completed}
            onChange={handleCompletedClick}
          ></input>
          {title}
        </span>
        <button className=" btn btn-danger" onClick={handleDeleteTodo}>
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
