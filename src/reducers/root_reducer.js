import { combineReducers } from "redux";
import todoReducer from "./todo_reducer";
import userReducer from "./user_reducer";
import postReducer from './post_reducer'

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  post: postReducer
});

export default rootReducer;
