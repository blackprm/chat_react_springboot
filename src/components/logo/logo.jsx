import React, { Component, Fragment } from 'react';
import './logo.css'
import logo from './logo.jpeg'
export default class Logo extends Component {

  

  render() {

    return (<Fragment>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
      </div>


    </Fragment>)
  }
}