import React, { Component, Fragment } from 'react';
import HeaderSelecter from '../header-selecter/header-selecter'
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button
} from 'antd-mobile';
export default class SeekerInfo extends Component {
  state = {
    header:"",
    post:"",
    info:""
  }
  handlerChange = (key,value) =>{
    this.setState({
      [key] : value
    })
  }
  save = () => {
    console.log(this.state);
  }

  handlerClick = (text) => {
    this.setState({
      header:text
    })
  }
  render() {
    return (
    <Fragment>
      <NavBar>大神信息完善</NavBar>
      <HeaderSelecter handlerClick={this.handlerClick}/>
      <InputItem placeholder='求职岗位' onChange = {(v) => this.handlerChange("post",v)}>求职岗位</InputItem>
      <TextareaItem title="个人介绍" rows={12} placeholder="请输入个人介绍" clear onChange = {(v) => this.handlerChange("info",v)} />
      <Button type="primary"  onClick={this.save}>保 存</Button>
    </Fragment>)
  }
}