import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import BossInfo from "../bossInfo/boss-info";
import SeekerInfo from "../seek-info/seeker-info";
import Boss from "../boss/boss";
import Seeker from "../seeker/seeker";
import Message from "../message/mesage";
import { NavBar } from "antd-mobile";
import UserCenter from "../user-center/user-center";
import NotFound from "../../components/not-found/not-found";
import FooterNav from "../../components/footer-nav/footer-nav";

export default class Main extends Component {
  navList = [
    {
      path: "/main/boss",
      component: Boss,
      title: "seeker-list",
      text: "求职者",
      icon: "list"
    },
    {
      path: "/main/seeker",
      component: Seeker,
      title: "boss-list",
      text: "雇主",
      icon: "list"
    },
    {
      path: "/main/message",
      component: Message,
      title: "消息列表",
      text: "消息",
      icon: "message"
    },
    {
      path: "/main/user-center",
      component: UserCenter,
      title: "用户中心",
      text: "home",
      icon: "center"
    }
  ];

  render() {
    const { navList } = this;
    const path = this.props.location.pathname;
    
    const e = navList.find(v => v.path === path);
    if (e) {
      if (e.path === "/main/seeker") {
        navList[0].hide = true;
        navList[1].hide = false;
      }

      if (e.path === "/main/boss") {
        navList[0].hide = false;
        navList[1].hide = true;
      }
    }

    return (
      <Fragment>
        {e ? <NavBar className={'top'}>{e.title}</NavBar> : null}
        <Switch>
          {navList.map((value, index) => (
            <Route path={value.path} component={value.component} key={index} />
          ))}
          <Route path="/main/boss-info" component={BossInfo} />
          <Route path="/main/seeker-info" component={SeekerInfo} />
          <Route component={NotFound} />
        </Switch>
        {e ? <FooterNav navList={navList} curNav={e} /> : null}
      </Fragment>
    );
  }
}
