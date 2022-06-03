import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTodoDone } from "../redux/doneTodo";
import TodoItem from "./TodoItem";

const DoneList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(switchTodoDone());
  }, [dispatch]);
  const dones = useSelector((state) => state.done);
  return (
    <>
      <h2> Things that are alredy done</h2>
      <ul className="list-group">
        {dones.length &&
          dones.map(
            (done) =>
              done !== undefined && (
                <TodoItem
                  key={done.id + "dn"}
                  id={done.id}
                  title={done.title}
                  completed={done.completed}
                ></TodoItem>
              )
          )}
      </ul>
    </>
  );
};

export default DoneList;
