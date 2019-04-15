import React, { Component } from "react";
import { List, WhiteSpace, WingBlank, Badge } from "antd-mobile";
import * as _User from "../../localStorage/userStorage";
import { getRoomNtReadNum } from "../../utils/chat-utils";
import QueueAnim from "rc-queue-anim";
const Item = List.Item;
export default class Message extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(_User.getUser());

    this.state = {
      user: user
    };
  }
  componentWillMount() {
    this.props.getRoomsByUserId(this.state.user.userId);
  }

  render() {
    const { rooms } = this.props;

    return (
      <div style={{ marginBottom: 50, marginTop: 50 }}>
        <WingBlank>
          <List>
            <QueueAnim type="alpha" duration="2000">
              {rooms.map((value, index) => {
                const noReadNum = getRoomNtReadNum(
                  value.chats,
                  this.state.user.userId
                );
                const toUser =
                  this.state.user.userId === value.user1.userId
                    ? value.user2
                    : value.user1;
                return (
                  <div key={index}>
                    <WhiteSpace size="lg" />
                    <Item
                      thumb={require(`../../assets/images/${
                        toUser.header
                      }.png`)}
                      onClick={() => {
                        this.props.getRoomByFromTo_action(
                          this.props.user.userId,
                          toUser.userId
                        );
                        this.props.history.push(`/main/chat/${toUser.userId}`);
                      }}
                      extra={<Badge text={noReadNum} />}
                    >
                      {toUser.userName}
                    </Item>
                  </div>
                );
              })}
            </QueueAnim>
          </List>
        </WingBlank>
      </div>
    );
  }
}
