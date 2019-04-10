/**
 * 包含n个reducer 函数,根据type和老的state返回新的state 
 */
import {combineReducers } from 'redux'
 function xxx(state = 0,action){
  return state;
 }

 function yyy(state = 0,action){
  return state;
 }

 export default combineReducers({
   xxx,
   yyy
 })