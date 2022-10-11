import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  todoReducer,
  loginReducer,
});

export default rootReducer;