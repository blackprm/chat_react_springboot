
import {reqRegister,reqLogin} from '../api'
import {AUTH_SUCCESS,ERROR_MESSAGE, CLEAR_MESSAGE} from './action-types'

// register同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data : user})
const errorMsg = (msg) => ({type:ERROR_MESSAGE,data:msg})
export const clearMessage = () => ({type:CLEAR_MESSAGE})
// 注册的异步action
export const register = (user) => {

  return async dispatch => {
    // 发送异步的请求

    const response = await reqRegister(user);
    const result = response.data;
    if(result.code === 0){
      // 成功
      dispatch(authSuccess(result.data))
    }else{
      // 失败
      dispatch(errorMsg(result.msg))
    }
    
  }
}

// 登录的异步action
export const login =(user) =>{
  console.log(user)
  return async dispatch => {
    const response = await reqLogin(user);
    const {data} = response;

    if(data.code === -1){
      dispatch(errorMsg(data.msg));
    }else{
      dispatch(authSuccess(data.user));
    }
  }
}