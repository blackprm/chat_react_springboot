/**
 * 接口函数的集合
 */
import ajax from "./ajax";

export const reqRegister = user => ajax("/user", user, "post");
export const reqLogin = ({ username, password }) =>
  ajax("/login", { username, password }, "post");
export const reqUpdateUserInfo = data => ajax("/user/userinfo", data, "post");
export const reqListForType = type => ajax(`/list/${type}`, {});
export const reqRoomListById = id => ajax(`/room/${id}`, {});
export const reqRoomByFromTo = (from,to) => ajax(`/room`,{fkUser1:from,fkUser2:to,roomName:from+"_"+to},'post'); 
export const reqSetChatRead = (chatId) => ajax(`/chat/read/${chatId}`,{},"post");