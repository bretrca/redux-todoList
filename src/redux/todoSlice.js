import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false }
  ],
  reducers: {
    getTodos: (state, action) => {
      return action.todos;
    }
  }
});
export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
