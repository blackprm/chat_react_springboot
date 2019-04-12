/**
 * 接口函数的集合
 */
import ajax from './ajax'

 export const reqRegister = (user) => ajax('/user',user,"post");
 export const reqLogin = ({username,password}) => ajax("/login",{username,password},"post");