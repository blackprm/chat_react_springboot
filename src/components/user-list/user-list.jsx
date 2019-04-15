import React, { Component, Fragment } from "react";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRoomByFromTo_action } from "../../redux/actions";
import { socket, init_socket } from "../../utils/socket";
import QueueAnim from "rc-queue-anim";
const Header = Card.Header;
const Body = Card.Body;

class UserList extends Component {
  constructor(props) {
    super(props);

    init_socket(socket);
  }
  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <Fragment>
        <WingBlank style={{ marginBottom: 50, marginTop: 50 }}>
          <QueueAnim duration="2000" type="left">
            {userList.map((v, i) => {
              return (
                <div key={i}>
                  <WhiteSpace />
                  <Card
                    onClick={() => {
                      this.props.getRoomByFromTo_action(
                        this.props.user.userId,
                        v.userId
                      );
                      this.props.history.push(`/main/chat/${v.userId}`);
                    }}
                  >
                    <Header
                      extra={v.userName}
                      thumb={require(`../../assets/images/${v.header}.png`)}
                    />
                    <Body>
                      <div>职位 : {v.post}</div>
                      {v.company ? <div>公司: {v.company}</div> : null}
                      {v.salary ? <div>薪水: {v.salary}</div> : null}
                      <div>描述 : {v.info} </div>
                    </Body>
                  </Card>
                </div>
              );
            })}
          </QueueAnim>
        </WingBlank>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { getRoomByFromTo_action }
)(withRouter(UserList));
