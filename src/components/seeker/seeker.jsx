import React, { Component, Fragment } from 'react';
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
  render() {
    return (<Fragment>Seeker</Fragment>)
  }
}