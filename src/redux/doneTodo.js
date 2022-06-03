import { createSlice } from "@reduxjs/toolkit";

const doneTodo = createSlice({
  name: "done",
  initialState: [{ id: 5, title: "done", completed: true }],
  reducers: {
    switchTodoDone: (state, action) => {
      state.push(action.payload);
    }
  }
});
export const { switchTodoDone } = doneTodo.actions;
export default doneTodo.reducer;
