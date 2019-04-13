import React, { Component, Fragment } from "react";
import { WingBlank, WhiteSpace, Card } from "antd-mobile";
const Header = Card.Header;
const Body = Card.Body;
export default class UserList extends Component {
  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <Fragment>
        <WingBlank style = {{marginBottom:50,marginTop:50}}>
          {userList.map((v, i) => {
            return (
              <Fragment key={i}>
                <WhiteSpace />
                <Card>
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
