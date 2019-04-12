/**
 * 包含n个reducer 函数,根据type和老的state返回新的state 
 */
import {AUTH_SUCCESS,ERROR_MESSAGE, CLEAR_MESSAGE}from './action-types'
import {combineReducers } from 'redux'

 const initUser = {
  userId:-1,
  userName:'',
  msg:"",
  type:""
 }
 function user(state = initUser,action){
    switch(action.type){
      case CLEAR_MESSAGE:
        return {...state,msg:''};
      case AUTH_SUCCESS:
        return {...state,...action.data};
      case ERROR_MESSAGE:
        return {...state,msg:action.data};
      default:
        return state;
    }
 }

 export default combineReducers({
   user
 })