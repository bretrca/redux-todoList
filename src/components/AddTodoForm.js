import React, { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState();
  return (
    <form className="form-inline-mt-3 mb-3">
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
