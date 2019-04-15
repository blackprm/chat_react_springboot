/**
 * 包含n个reducer 函数,根据type和老的state返回新的state
 */
import {
  AUTH_SUCCESS,
  ERROR_MESSAGE,
  CLEAR_MESSAGE,
  RECIVE_USER,
  INIT_USER,
  GET_LIST,
  REFRESH_USER,
  GET_ROOMS_BY_USERID,
  GET_ROOM_BY_FROM_TO
} from "./action-types";
import { combineReducers } from "redux";
import { getRedirectTo } from "../utils";
import * as _User from '../localStorage/userStorage';
const initUser = {
  userId: -1,
  userName: "",
  msg: "",
  type: ""
};
function user(state = initUser, action) {
  switch (action.type) {
    case CLEAR_MESSAGE:
      return { ...state, msg: "" };
    case AUTH_SUCCESS:
      const { type, header } = action.data;
      const to = getRedirectTo(type, header);
      _User.addUser(action.data);
      return { ...state, ...action.data, redirectTo: to };
    case RECIVE_USER:
      return { ...action.data };
    case INIT_USER:
      return { ...initUser };
    case ERROR_MESSAGE:
      return { ...state, msg: action.data };

    case REFRESH_USER:
      return { ...action.data };
    default:
      return state;
  }
}

function userList(state = [], action) {
  switch (action.type) {
    case GET_LIST:
      return [...action.data];
    default:
      return state;
  }
}

function rooms(state = [], action) {
  switch (action.type) {
    case GET_ROOMS_BY_USERID:
      return [...action.data];
    default:
      return state;
  }
}
function room(state = [] ,action){
  switch(action.type){
    case GET_ROOM_BY_FROM_TO:
    return action.data
    default:
    return state;
  }
}
export default combineReducers({
  user,
  userList,
  rooms,
  room
});

