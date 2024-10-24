import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthenReducer from "./actions/authentication";
import SystemKeyReducer from "./actions/systemkey";
import CartReducer from "./actions/cart"


const rootReducer = combineReducers({
  SystemKey: SystemKeyReducer,
  Cart:CartReducer,
  Authen: AuthenReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
