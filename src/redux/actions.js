import {
  reqRegister,
  reqLogin,
  reqUpdateUserInfo,
  reqListForType,
  reqRoomListById,
  reqRoomByFromTo
} from "../api";
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
import { socket } from "../utils/socket";
// register同步action
export const authSuccess = user => ({ type: AUTH_SUCCESS, data: user });
const errorMsg = msg => ({ type: ERROR_MESSAGE, data: msg });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });
export const initUser = () => ({ type: INIT_USER });
export const refreshUser = user => ({ type: REFRESH_USER, data: user });

// 注册的异步action
export const register = user => {
  return async dispatch => {
    // 发送异步的请求

    const response = await reqRegister(user);
    const result = response.data;
    if (result.code === 0) {
      // 成功
      dispatch(authSuccess(result.data));
    } else {
      // 失败
      dispatch(errorMsg(result.msg));
    }
  };
};

// 登录的异步action
export const login = user => {
  return async dispatch => {
    const response = await reqLogin(user);
    const { data } = response;

    if (data.code === -1) {
      dispatch(errorMsg(data.msg));
    } else {
      dispatch(authSuccess(data.user));
    }
  };
};

// 更新用户信息
export const updateUserInfo = user => {
  return async dispatch => {
    const response = await reqUpdateUserInfo(user);
    const result = response.data;
    if (result.code === -1) {
      dispatch({ type: INIT_USER });
    } else {
      dispatch({ type: RECIVE_USER, data: result.user });
    }
  };
};

export const getList = type => {
  return async dispatch => {
    const resp = await reqListForType(type);
    const { data } = resp;
    dispatch({ type: GET_LIST, data: data });
  };
};

export const sendMsg = ({ from, to, content }) => {
  return dispatch => {
    socket.connect.send(JSON.stringify({ code: 1, from, to, content }));
    console.log(JSON.stringify({ from, to, content }));
  };
};

export const getRoomsByUserId = userId => {
  return async (dispatch) => {

    const resp = await reqRoomListById(userId);
    const { data } = resp;
    const {code} = data;

    // 返回成功有数据
    if(code === 1){
      const {rooms} = data;
      dispatch({type:GET_ROOMS_BY_USERID,data : rooms});
    }else{
      dispatch({type:GET_ROOMS_BY_USERID,data : []});
    }

    
  };
};

export const getRoomByFromTo_action = (from,to) => {
  return async dispatch => {
    const resp = await reqRoomByFromTo(from,to);
    const {data} = resp;
    const  {room}  = data;

    console.log(resp);
    dispatch({type:GET_ROOM_BY_FROM_TO,data:room})
  }
}

