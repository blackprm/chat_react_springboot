import React, { Component, Fragment } from 'react';
import Logo from '../../components/logo/logo'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,

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
  register = () => {
    console.log(this.state)
  }
  render() {
    const ListItem = List.Item;
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
            <InputItem onChange={value => this.handlerChange('username', value)}>用户名: </InputItem>
            <WhiteSpace size="lg" />
            <InputItem type="password" onChange={value => this.handlerChange('password', value)}>密&nbsp;&nbsp;&nbsp;码: </InputItem>

            <Button type="primary" onClick={this.register}>登录</Button>

          </List>
        </WingBlank>
      </div>
    </Fragment>)
  }
}