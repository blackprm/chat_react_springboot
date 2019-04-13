import React, { Component, Fragment } from 'react';
import UserList from '../user-list/user-list';
import * as _User from '../../localStorage/userStorage';

export default class Seeker extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log(_User.getUser())
    if(_User.getUser() === null)
      _User.addUser(this.props.user);
  }

  componentDidMount(){
    this.props.getList('boss')
  }
  render() {
    return (
    <Fragment>
      <UserList userList = {this.props.userList}/>
    </Fragment>
    )
  }
}