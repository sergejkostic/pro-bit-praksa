import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import postReducer from './post_reducer'

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

export default rootReducer;
