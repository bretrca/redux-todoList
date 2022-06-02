import React from "react";

const TodoItem = ({ id, title, completed }) => {
  const handleCompletedClick = () => {};
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justity-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompletedClick}
          ></input>
          {title}
        </span>
        <button className=" btn btn-danger">X</button>
      </div>
    </li>
  );
};

export default TodoItem;
