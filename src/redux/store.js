import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import doneReducer from "./doneTodo";
import deletedTodos from "./deletedTodos";

export default configureStore({
  reducer: { todos: todoReducer, done: doneReducer, delete: deletedTodos }
});
