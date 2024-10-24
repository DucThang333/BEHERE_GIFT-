import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const SystemKeyReducer = createSlice({
  name: "SystemKey",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { Add } = SystemKeyReducer.actions;
export default SystemKeyReducer.reducer;
