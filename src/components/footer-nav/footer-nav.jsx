import React, { Component, Fragment } from "react";
import { TabBar } from "antd-mobile";
import {withRouter} from 'react-router-dom';
import './footernav.css'



const TabItem = TabBar.Item;

class FooterNav extends Component {
  render() {
    let { navList } = this.props;
    const path = this.props.location.pathname;
    navList =navList.filter((curValue) => (!curValue.hide))

    
    return (
      <Fragment>
        <TabBar>
          {navList.map((nav, index) => (
            <TabItem 
              key={index}
              title={nav.text}
              icon={{ uri: require(`./images/${nav.icon}.png`) }}
              selectedIcon={{
                uri: require(`./images/${nav.icon}-selected.png`)
              }}
              selected ={nav.path === path}
              onPress={() => {
                this.props.history.replace(nav.path);
              }}
            />
          ))}
        </TabBar>
      </Fragment>
    );
  }
}
export default withRouter(FooterNav);