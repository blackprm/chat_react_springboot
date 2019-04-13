import React, { Component } from "react";
import { Result, List, Button, WhiteSpace, Modal } from "antd-mobile";
import * as _User from "../../localStorage/userStorage";
import { Redirect } from "react-router-dom";
export default class UserCenter extends Component {
  logout = () => {
    Modal.alert("确认退出?", "退出后需要从新登录！！！", [
      {
        text: "取消"
      },
      {
        text: "确定",
        onPress: () => {
          _User.clearUser();
          this.props.history.replace("/login");
        }
      }
    ]);
  };

  render() {
    if (this.props.user.userId === -1) {
      this.props.refreshUser(JSON.parse(_User.getUser()));
      return <div></div>
    } else {
      return (
        <div style={{ marginBottom: 50, marginTop: 50 }}>
          <Result
            img={
              <img
                src={require(`../../assets/images/${
                  this.props.user.header
                }.png`)}
                style={{ width: 50 }}
                alt={"头像"}
              />
            }
            title={this.props.user.userName}
            message={this.props.user.company}
          />

          <List renderHeader={() => "相关信息"}>
            <List.Item multipleLine>
              <List.Item.Brief>职位 : {this.props.user.post}</List.Item.Brief>
              <List.Item.Brief>简介 : {this.props.user.info}</List.Item.Brief>
              {this.props.user.salary ? (
                <List.Item.Brief>
                  薪水 : {this.props.user.salary}
                </List.Item.Brief>
              ) : null}
            </List.Item>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button type="warning" onClick={this.logout}>
            退出登录
          </Button>
        </div>
      );
    }
  }
}
