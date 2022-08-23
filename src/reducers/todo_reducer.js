import {
  HIDE_TODO_MODAL,
  SHOW_TODO_MODAL,
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
} from "./../actions/types";

const initialState = {
  todoData: [],
  todoModalVisible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HIDE_TODO_MODAL:
      return { ...state, todoModalVisible: false };
    case SHOW_TODO_MODAL:
      return { ...state, todoModalVisible: true };
    case TODO_ADD: 
        return {...state, todoData: [...state.todoData, action.payload]}
    case TODO_DELETE:
        const newTodos = state.todoData.filter(todo => todo.ident !== action.payload);
        return {...state, todoData: newTodos}
    default:
      return state;
  }
}
