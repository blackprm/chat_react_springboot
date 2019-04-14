import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar, Icon, List, InputItem } from "antd-mobile";
import { sendMsg } from "../../redux/actions";
import { getRoomByFromTo } from "../../utils/chat-utils";
const Item = List.Item;
class Chat extends Component {
  constructor(props) {
    super(props);
    const from = this.props.user.userId;
    const to = this.props.match.params.userid;
    const { rooms } = this.props;
    const room = getRoomByFromTo(from, to, rooms);
    this.state = {
      room: room
    };
  }
  handleSend = () => {
    const from = this.props.user.userId;
    const to = this.props.match.params.userid;
    const content = this.InputItem.state.value.trim();
    if (content) {
      this.InputItem.setState({
        value: ""
      });
      this.props.sendMsg({ from, to, content });
    }
  };
  render() {
    const { room } = this.state;
    console.log(this.props);
    console.log(room);
    const toUser =
      this.props.user.userId === room.user1.userId ? room.user2 : room.user1;
    console.log(room);
    return (
      <div>
        <NavBar
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
          leftContent={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          {toUser.userName}
        </NavBar>
        <List style={{ marginBottom: 50, marginTop: 50 }}>
          {room.chats.map((value, index) => {
            // 左边
            if (value.from == toUser.userId) {
              return (
                <Item
                key={index}
                  thumb={require(`../../assets/images/${toUser.header}.png`)}
                  multipleLine
                  wrap
                >
                  {value.chatContent}
                </Item>
              );
              // 右边
            } else {
              return (
                <Item
                key={index}
                  extra={<img src={require(`../../assets/images/${this.props.user.header}.png`)} />}
                  multipleLine
                  wrap
                >
                  {value.chatContent}
                </Item>
              );
            }
          })}

          <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <InputItem
              extra={"发送"}
              ref={Item => (this.InputItem = Item)}
              onExtraClick={this.handleSend}
            />
          </div>
        </List>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user, rooms: state.rooms }),
  { sendMsg }
)(Chat);
