import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo';
import axios from "../../utils/axios-utils";
// import * as _User from '../../localStorage/userStorage'
// import { Redirect } from "react-router-dom";
// import { getRedirectTo } from "../../utils";
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button,
  Toast
} from 'antd-mobile'

export default class Register extends Component {
  state = {
    username: '',
    username_ok: false,
    password: '',
    password2: '',
    type: 'boss',
  }

  componentWillMount() {
    this.props.initUser();
  }
  register = (e) => {



    const { password, password2 } = this.state;
    const { username, type, username_ok } = this.state;
    if (!username_ok) {
      Toast.fail("用户名已存在", 1.5);
      return;
    }


    if (password !== password2) {
      Toast.fail("两次密码不一致", 0.8);
      e.preventDefault();
      return;
    }

    if (password.length <= 5) {
      Toast.fail("密码长度小于6", 1);
      e.preventDefault();
      return;
    }


    if (password.length === 0) {
      Toast.fail("密码不能为空", 1.5);
      return;
    }

    if (username.length === 0) {
      Toast.fail("用户名不能为空", 1.5);
      return;
    }

    const data = {
      userName: username,
      password: password,
      type: type
    }

    this.props.register(data);
    console.log(this.props.user)


  }


  handlerChange = (key, value) => {
    this.setState(
      {
        [key]: value
      }
    )
  }

  // 当用户名输入框失去焦点时
  userNameOnBlur = () => {
    const { username } = this.state;
    if (username === '') {
      Toast.fail("用户名不能为空", 1);
      return;
    }
    axios.get(`/user/username/${username}`).then(
      (res) => {
        const { data } = res;
        if (data.code) {

          this.setState(
            {
              username_ok: false
            }
          )
          Toast.fail("用户名已存在", 1.5);
        } else {
          this.setState(
            {
              username_ok: true
            }
          )

        }
      }
    )
  }

  componentDidUpdate() {
    if (this.props.user.userId !== -1) {
      Toast.loading("注册成功,跳转信息完善界面", 1.5);
      const { redirectTo } = this.props.user;


      setTimeout(() => {
        this.props.history.replace(redirectTo);
      }, 1600);


    }
  }
  render() {
    const ListItem = List.Item;


    /**
     *  进行免登录的代码
     */
    // const userString = _User.getUser();
    // if(userString !== "undefined"){
    //   const localUser = JSON.parse(userString);
    //   if (localUser !== null) {
    //     const { type, header } = localUser
    //     const path = getRedirectTo(type, header);
    //     return <Redirect to={path} />
    //   }
    // }
    return (<Fragment>
      <div>
        <NavBar mode="dark">求&nbsp;职</NavBar>
        <Logo />

        <WingBlank>
          <List>
            <WhiteSpace size="lg" />
            <InputItem
              onChange={value => this.handlerChange('username', value)}
              placeholder={"请输入用户名"}
              onBlur={this.userNameOnBlur}
            >用户名: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password" onChange={value => this.handlerChange('password', value)} placeholder="输入密码">密&nbsp;&nbsp;&nbsp;码: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password" onChange={value => this.handlerChange('password2', value)} placeholder="确认密码">确认密码: </InputItem>
            <WhiteSpace size="lg" />
            <ListItem>
              性&nbsp;&nbsp;&nbsp;别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio onChange={() => this.handlerChange('type', "seeker")} checked={this.state.type === 'seeker' ? true : false}>求职</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio onChange={() => this.handlerChange('type', "boss")} checked={this.state.type === 'boss' ? true : false}>招聘</Radio>
            </ListItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={this.register}>注册</Button>
            <Button onClick={() => { this.props.history.push("/login") }}>已有帐户</Button>
          </List>
        </WingBlank>
      </div>
    </Fragment>)

  }
}