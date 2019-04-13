import React,{Component,Fragment} from 'react';
import {Button} from 'antd-mobile';
export default class NotFound extends Component{
  
 render(){
    return (<Fragment>
      <h2>抱歉您要找的页面没有找到</h2>
      <Button
      type="primary"
      onClick = {() => this.props.history.replace('/')}
      >回到首页</Button> 


    </Fragment>)
  }
}