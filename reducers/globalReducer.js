import { createSlice } from "@reduxjs/toolkit";

const initState = {
  currentPage: 1,
};

const globalReducer = createSlice({
  name: "global",
  initialState: initState,
  reducers: {
    changePage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { changePage } = globalReducer.actions;

export default globalReducer.reducer;
