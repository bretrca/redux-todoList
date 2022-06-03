import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDeleted } from "../redux/deletedTodos";
import { addTodo } from "../redux/todoSlice";

const DeletedList = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const deleted = useSelector((state) => state.delete);
  const handleRegenerate = (item) => {
    console.log({ item });
    dispatch(addTodo({ title: item.title }));
    dispatch(deleteDeleted({ id: item.id }));
  };
  const handleDelete = (element) => {
    dispatch(deleteDeleted({ id: element.id }));
  };
  return (
    <>
      <h2>Deleted</h2>
      <ul className="list-group">
        {deleted.length === 0 ? (
          <>nada que ver</>
        ) : (
          deleted.length &&
          deleted.map((deletedItem) => (
            <li
              key={deletedItem.id + "del"}
              className={`list-group-item ${
                deletedItem.completed && "list-group-item-success"
              }`}
            >
              <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                  {deletedItem.title}
                </span>
                <div className="d-flex justify-content-between">
                  <button
                    className="m-1 btn btn-danger"
                    onClick={() => handleRegenerate(deletedItem)}
                  >
                    Regenerate
                  </button>
                  <button
                    className="m-1 btn btn-danger"
                    onClick={() => handleDelete(deletedItem)}
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default DeletedList;
