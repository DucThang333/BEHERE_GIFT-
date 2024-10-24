import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts:[]
};
const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    get: (state, action) => {
      state.User = action.payload;
      state.Login = true;
      state.Role = action.payload?.roleID || 0;
    },
    add: (state) => {
      state.User = initialState.User;
      state.Login = false;
      state.Role = 0;
    },
    delete:(state)=>{

    }
  },
});


export const { get, add} = CartReducer.actions;
export default CartReducer.reducer;