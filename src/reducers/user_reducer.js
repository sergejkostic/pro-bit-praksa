import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../actions/types";

const initialState = {
  user: {},
  jwt: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_START:
        return {...initialState, loading: true};
    case USER_REGISTER_SUCCESS:
        return {...state, loading: false, jwt: action.payload.jwt, user: action.payload.user};
    case USER_LOGIN_START:
        return {...initialState, loading: true};
    case USER_LOGIN_SUCCESS:
        return {...state, loading: false, jwt: action.payload.jwt, user: action.payload.user};
    case USER_LOGIN_FAILURE:
        return {...initialState};
    case USER_LOGOUT:
        return {...initialState};
    default:
      return state;
  }
}
