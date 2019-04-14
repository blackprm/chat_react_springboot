import { baseUrl } from "../config/main";
import * as _User from "../localStorage/userStorage";
export const socket = {};
export const destory_socket = socket => {
  socket.connect.close();
  socket.connect = false;
  console.log(socket.connect);
};
export const init_socket = socket => {
  console.log(socket);
  if (!socket.connect) {
    socket.connect = new WebSocket(`ws://${baseUrl}/api/testscoket`);

    socket.connect.onopen = () => {
      const user_json_string = _User.getUser();
      if (user_json_string) {
        const { userId } = JSON.parse(user_json_string);
        alert("初始化连接");
        // 发送初始化连接
        socket.connect.send(JSON.stringify({ code: 0, user_id: userId }));
        // 绑定接收处理函数
        socket.connect.onmessage = event => {
          const { data } = event;
          alert(data);
        };
      }
    };
  }
};
