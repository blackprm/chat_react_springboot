import React, { Component, Fragment } from "react";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";
import { withRouter } from "react-router-dom";
import {socket,init_socket} from '../../utils/socket'
const Header = Card.Header;
const Body = Card.Body;

class UserList extends Component {
  constructor(props){
    super(props);

    init_socket(socket);
  }
  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <Fragment>
        <WingBlank style={{ marginBottom: 50, marginTop: 50 }}>
          {userList.map((v, i) => {
            return (
              <Fragment key={i}>
                <WhiteSpace />
                <Card
                  onClick={() =>
                    this.props.history.push(`/main/chat/${v.userId}`)
                  }
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
              </Fragment>
            );
          })}
        </WingBlank>
      </Fragment>
    );
  }
}

export default withRouter(UserList);
