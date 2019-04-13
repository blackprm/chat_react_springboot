
import { reqRegister, reqLogin, reqUpdateUserInfo,reqListForType } from '../api'
import {
  AUTH_SUCCESS,
  ERROR_MESSAGE,
  CLEAR_MESSAGE,
  RECIVE_USER,
  INIT_USER,
  GET_LIST,
  REFRESH_USER
} from './action-types'

// register同步action
export const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const errorMsg = (msg) => ({ type: ERROR_MESSAGE, data: msg })
export const clearMessage = () => ({ type: CLEAR_MESSAGE })
export const initUser = () => ({type:INIT_USER})
export const refreshUser = (user) => ({type:REFRESH_USER,data:user})
// 注册的异步action
export const register = (user) => {

  return async dispatch => {
    // 发送异步的请求

    const response = await reqRegister(user);
    const result = response.data;
    if (result.code === 0) {
      // 成功
      dispatch(authSuccess(result.data))
    } else {
      // 失败
      dispatch(errorMsg(result.msg))
    }

  }
}

// 登录的异步action
export const login = (user) => {

  return async dispatch => {
    const response = await reqLogin(user);
    const { data } = response;

    if (data.code === -1) {
      dispatch(errorMsg(data.msg));
    } else {
      dispatch(authSuccess(data.user));
    }
  }
}


// 更新用户信息
export const updateUserInfo = (user) => {
  return async dispatch => {
    const response = await reqUpdateUserInfo(user);
    const result = response.data;
    if (result.code === -1) {
      dispatch({type:INIT_USER})
    }else{
      dispatch({type:RECIVE_USER,data:result.user})
    }

  }
}


export const getList = (type) => {
    return async dispatch => {
      const resp = await reqListForType(type);
      const {data} = resp;
      dispatch({type:GET_LIST,data:data})
    }
}