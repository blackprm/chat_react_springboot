import React, { Component, Fragment } from "react";
import * as _User from "../../localStorage/userStorage";
import UserList from "../user-list/user-list";
export default class Boss extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    if (_User.getUser() === null) {
      _User.addUser(this.props.user);
      this.props.authSuccess(this.props.user);
    }
  }
  componentDidMount(){
    this.props.getList("seeker");
  }
  render() {
    return (
      <div>
        <UserList userList = {this.props.userList} />
      </div>
    );
  }
}
