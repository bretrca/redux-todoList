import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
