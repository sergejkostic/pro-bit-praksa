import { 
    HIDE_TODO_MODAL,
    SHOW_TODO_MODAL,
    TODO_ADD,
    TODO_DELETE,
    TODO_EDIT
} from './../actions/types';

const initialState = {
    todoData: [],
    todoModalVisible: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case HIDE_TODO_MODAL:
            return {...state, todoModalVisible: false};
        case SHOW_TODO_MODAL:
            return {...state, todoModalVisible: true};
        default:
            return state;
    }
}
