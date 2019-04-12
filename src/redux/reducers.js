/**
 * 包含n个reducer 函数,根据type和老的state返回新的state 
 */
import {
  AUTH_SUCCESS,
  ERROR_MESSAGE,
  CLEAR_MESSAGE,
  RECIVE_USER,
  INIT_USER
} from './action-types'
import { combineReducers } from 'redux'
import { getRedirectTo } from '../utils'
const initUser = {
  userId: -1,
  userName: '',
  msg: "",
  type: ""
}
function user(state = initUser, action) {
  switch (action.type) {
    case CLEAR_MESSAGE:
      return { ...state, msg: '' };
    case AUTH_SUCCESS:
      const { type, header } = action.data;
      const to = getRedirectTo(type, header);
      return { ...state, ...action.data, redirectTo: to };
    case RECIVE_USER:
      return {...action.data}
    case INIT_USER:
      return {...initUser}
    case ERROR_MESSAGE:
      return { ...state, msg: action.data };
    default:
      return state;
  }
}

export default combineReducers({
  user
})