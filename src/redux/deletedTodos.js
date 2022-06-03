import { createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
  name: "delete",
  initialState: [
    {
      id: 9,
      title: "clean",
      completed: false
    }
  ],
  reducers: {
    addDeleted: (state, action) => {
      state.push(action.payload);
    },
    deleteDeleted: (state, action) => {
      return state.filter((deleted) => deleted.id !== action.payload.id);
    }
  }
});
export const { addDeleted, deleteDeleted } = deleteSlice.actions;
export default deleteSlice.reducer;
