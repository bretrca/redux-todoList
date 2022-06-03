import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  const todos = useSelector((state) => state.todos);

  return todos.length === 0 ? (
    <>Nothing to do</>
  ) : (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id + "td"}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
