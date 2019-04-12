import React,{Component,Fragment} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import BossInfo from '../bossInfo/boss-info';
import SeekerInfo from '../seek-info/seeker-info';
export default class Main extends Component{
  constructor(props){
  super(props)
  this.state={
 
  }
}
 render(){
    return (
    <Fragment>
        <Switch>
          <Route path="/main/boss-info" component={BossInfo}/>
          <Route path="/main/seeker-info" component={SeekerInfo}/>
          <Redirect to="/main/boss-info"/>
        </Switch>
    </Fragment>)
  }
}