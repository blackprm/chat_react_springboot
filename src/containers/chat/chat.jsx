import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar, Icon, List, InputItem } from "antd-mobile";
import { sendMsg,getRoomByFromTo_action} from "../../redux/actions";
import { getRoomByFromTo } from "../../utils/chat-utils";

const Item = List.Item;
class Chat extends Component {
  
  handleSend = () => {

    
    const from = this.props.user.userId;
    const to = this.props.match.params.userid;
    const content = this.InputItem.state.value.trim();

    this.props.getRoomByFromTo_action(from,to);

    if (content) {
      this.InputItem.setState({
        value: ""
      });
      this.props.sendMsg({ from, to, content });
    }
  };

  componentWillMount(){

  }
  
  render() {
    const {room} = this.props;
    const from = this.props.user.userId;
    const to = this.props.match.params.userid;
    if(room.length === 0)
    this.props.getRoomByFromTo_action(from,to);

    
    if(room.length <= 0){
      return <div></div>
    }
    const fromUserId = this.props.user.userId;
    const toUser = fromUserId == room.user1.userId ? room.user2 : room.user1;
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
  state => ({ user: state.user, room: state.room }),
  { sendMsg, getRoomByFromTo_action}
)(Chat);
