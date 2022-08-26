import { uuid } from '../utils';
import {
    GET_POSTS_START,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_SUCCESS,
    ADD_POST_START,
    HIDE_POST_MODAL,
    SHOW_POST_MODAL
} from './../actions/types';

const initialState = {
    posts: [], // visible data
    _allPosts: [], // all data
    todoModalVisible: false,
    loading: false,
    search: ''
};

const updateWithVisible = (state) => {
    const searchString = state.search.toLowerCase();
    const filteredPosts = state._allPosts.filter(post => {
        return todo.title.toLowerCase().includes(searchString);
    });

    return { ...state, posts: filteredPosts };
}

export default function (state = initialState, action) {
    switch (action.type) {
        case HIDE_POST_MODAL:
            return { ...state, todoModalVisible: false };
        case SHOW_POST_MODAL:
            return { ...state, todoModalVisible: true };
        case ADD_POST_START:
            return { ...state, loading: true };
        case ADD_POST_SUCCESS:
        case ADD_POST_FAILURE:
            return { ...state, loading: false };
        //case TODO_CHANGE_SEARCH:
        //    return updateWithVisible({ ...state, search: action.payload });
        default:
            return {...initialState};
    }
};