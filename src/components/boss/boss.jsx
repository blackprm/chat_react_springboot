import React, { Component, Fragment } from 'react';
import * as _User from '../../localStorage/userStorage';
export default class Boss extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    if(_User.getUser() === null){
      _User.addUser(this.props.user);
    }
     
  }
  render() {
    return (<Fragment>Boss</Fragment>)

  }
}
