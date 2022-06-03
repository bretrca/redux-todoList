import React from "react";

const Item = ({
  completed,
  handleCompletedClick,
  title,
  id,
  handleDeleteTodo
}) => {
  return (
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
  );
};

export default Item;
