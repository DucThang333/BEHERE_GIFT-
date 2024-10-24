import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: {
    email: "",
    firstName: "",
    lastName: "",
    provinceID: 0,
    districtID: 0,
    wardID: 0,
    avatar:""
  },
  Login: false,
  Role: 0,
};

const AuthenReducer = createSlice({
  name: "Authen",
  initialState,
  reducers: {
    Authen: (state, action) => {
      state.User = action.payload;
      state.Login = true;
      state.Role = action.payload?.roleID || 0;
    },
    UnAuthen: (state) => {
      state.User = initialState.User;
      state.Login = false;
      state.Role = 0;
    },
  },
});

export const { Authen, UnAuthen } = AuthenReducer.actions;
export default AuthenReducer.reducer;
