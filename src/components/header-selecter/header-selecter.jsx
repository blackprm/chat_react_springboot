/**
 * 选择用户头像的UI组件
 */
import React, { Component, Fragment } from 'react';
import './header.css';
import {
  List,
  Grid
} from 'antd-mobile'
export default class HeaderSelecter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };
    this.headers = [];
    for (let i = 0; i < 20; i++) {
      let pic = (i + 1) + ".png";

      this.headers.push({ text: (i + 1), icon: require(`../../assets/images/${pic}`) })
    }
  }

  handlerClick = ({text,icon}) => {

    this.props.handlerClick(text);
    this.setState({
      icon
    })
    
  } 
  render() {
    let headerText = "";
    if (this.state.icon) {
      headerText = <div >已选择头像<img src={this.state.icon} width={40}  alt="头像" className={'header-img'}/></div>;
    }else{
      headerText = "请选择头像"  ;
    }
    return (
      <Fragment>
        <List renderHeader={() => headerText}>
          <Grid data={this.headers} columnNum={5} 
          onClick={this.handlerClick}
          />
        </List>

      </Fragment>)
  }
}