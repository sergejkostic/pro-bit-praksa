import { combineReducers } from "redux";
import todoReducer from "./todo_reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
