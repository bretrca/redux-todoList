import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: value }));
  };
  return (
    <form className="form-inline mt-3 mb-3" onSubmit={onSubmit}>
      <label className="sr-only"> Task to do</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-secondary mb-2">
        {" "}
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
