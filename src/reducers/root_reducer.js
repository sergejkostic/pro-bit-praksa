import { combineReducers } from "redux";
import todoReducer from "./todo_reducer";
import userReducer from "./user_reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer
});

export default rootReducer;
