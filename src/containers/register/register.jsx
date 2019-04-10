import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo';
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'

export default class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  register = () => {
    console.log(this.state)
  }


  handlerChange = (key, value) => {
    this.setState(
      {
        [key]: value
      }
    )
  }
  render() {
    const ListItem = List.Item;
    return (<Fragment>
      <div>
        <NavBar mode="dark">趣&nbsp;聊</NavBar>
        <Logo />

        <WingBlank>
          <List>
            <WhiteSpace size="lg" />
            <InputItem onChange={value => this.handlerChange('username', value)}>用户名: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password" onChange={value => this.handlerChange('password', value)}>密&nbsp;&nbsp;&nbsp;码: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password" onChange={value => this.handlerChange('password2', value)}>确认密码: </InputItem>
            <WhiteSpace size="lg" />
            <ListItem>
              性&nbsp;&nbsp;&nbsp;别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio onChange={() => this.handlerChange('type', "m")} checked={this.state.type === 'm' ? true : false}>男</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio onChange={() => this.handlerChange('type', "w")} checked={this.state.type === 'w' ? true : false}>女</Radio>
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