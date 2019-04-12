import React, { Component, Fragment } from 'react';
import HeaderSelecter from '../header-selecter/header-selecter'
import { Toast } from 'antd-mobile';

import {
  NavBar,
  InputItem,
  TextareaItem,
  Button
} from 'antd-mobile';
export default class BossInfo extends Component {
  state = {
    ...this.props.user,
    header: "",
    post: "",
    info: "",
    company: "",
    salary: ""
  }
  handlerChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  save = () => {
    this.props.updateUserInfo(this.state);

  }


  handlerClick = (text) => {
    this.setState({
      header: text
    })
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (user.info !== undefined && user.info !== null && user.info.length >= 0) {
      Toast.loading("完善成功", 1.3);
      setTimeout(() => {
        this.props.history.replace("/main/boss");
      },1500)
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelecter handlerClick={this.handlerClick} />
        <InputItem placeholder='请输入职位' onChange={v => this.handlerChange("post", v)}>招聘职位</InputItem>
        <InputItem placeholder='请输入公司名称' onChange={v => this.handlerChange("company", v)}>公司名称</InputItem>
        <InputItem placeholder='请输入薪水' onChange={v => this.handlerChange("salary", v)}>薪水</InputItem>
        <TextareaItem title="职位要求" rows={4} placeholder="请输入职位要求" clear onChange={v => this.handlerChange("info", v)} />
        <Button type="primary" onClick={this.save}>保 存</Button>
      </Fragment>)
  }
}