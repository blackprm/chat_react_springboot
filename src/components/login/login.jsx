import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo';
import * as _User from '../../localStorage/userStorage';
import { getRedirectTo } from '../../utils'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Toast,
  Icon,
  Button
} from 'antd-mobile'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handlerChange = (key, value) => {
    this.setState(
      {
        [key]: value
      }
    )
  }


  componentWillMount() {
    const userString = _User.getUser();

    if (userString !== "undefined") {

      const localUser = JSON.parse(userString);

      if (localUser !== null) {
        console.log(localUser)
        const { type, header } = localUser

        const path = getRedirectTo(type, header);

        this.props.history.replace(path);
        return ;
      }
    }

    this.props.initUser();
    _User.clearUser();
    
  }
  doLogin = () => {
    const { username, password } = this.state;

    if (username.length === 0) {
      Toast.fail("用户名不能为空", 1.5);
      return 0;
    }

    if (password.length === 0) {
      Toast.fail("密码不能为空", 1.5);
      return 0;
    }

    const data = {
      username: username,
      password: password
    }

    this.props.login(data);



  }

  componentDidUpdate() {

    if (this.props.user.userId === -1 && this.props.user.msg.length !== 0) {
      Toast.fail(this.props.user.msg, 1.6);
      this.props.clearMessage();
    }

    if (this.props.user.userId !== -1) {
      const { redirectTo } = this.props.user;


      Toast.loading("登录成功,跳转到主界面!", 1.6);


      setTimeout(() => {
        this.props.history.replace(redirectTo);
      }, 1500);
    }
  }

  render() {


    

    return (<Fragment>
      <div>
        <NavBar
          mode="dark"

          icon={<Icon type="left" />}

          onLeftClick={() => this.props.history.goBack()}
        >&nbsp;</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace size="lg" />
            <InputItem
              onChange={value => this.handlerChange('username', value)}
              placeholder="请输入用户名">用户名: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password"
              onChange={value => this.handlerChange('password', value)}
              placeholder="请输入密码">密&nbsp;&nbsp;&nbsp;码: </InputItem>
            <Button type="primary" onClick={this.doLogin}>登录</Button>
          </List>
        </WingBlank>
      </div>
    </Fragment>)
  }
}
