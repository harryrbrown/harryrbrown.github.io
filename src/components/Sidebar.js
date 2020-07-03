import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

import linkedin from './../img/052-linkedin.svg';
import github from './../img/032-github.svg';
import messenger from './../img/025-messenger.svg';
import instagram from './../img/044-instagram.svg';
import twitter from './../img/096-twitter.svg';
import wechat from './../img/108-wechat.svg';
import spotify from './../img/082-spotify.svg';
import _switch from './../img/switch.svg';

export default class Navbar extends React.Component{
  render(){
    return (
      <div className="bottom">
        <a href="https://www.linkedin.com/in/hryrbrn"><img className="socialIcon" src={linkedin} style={{width: 20}}/></a><br/><br/>
        <a href="https://www.github.com/harryrbrown"><img className="socialIcon" src={github} style={{width: 20}}/></a><br/><br/>
        <a href="http://m.me/100008593681174"><img className="socialIcon" src={messenger} style={{width: 20}}/></a><br/><br/>
        <a href="https://www.instagram.com/realharrybrown"><img className="socialIcon" src={instagram} style={{width: 20}}/></a><br/><br/>
        <a href="https://www.twitter.com/hryrbrn"><img className="socialIcon" src={twitter} style={{width: 20}}/></a><br/><br/>
        <a href="https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FINQggbxLt-D_ebQcC0TJy7M=wc"><img className="socialIcon" src={wechat} style={{width: 20}}/></a><br/><br/>
        <a href="https://open.spotify.com/user/21ttlagltvoefrfidydhporzy?si=lN9Qq27STW6V_jDSY_9Jkg"><img className="socialIcon" src={spotify} style={{width: 20}}/></a><br/><br/>
        <Link to="/switch"><img className="socialIcon" src={_switch} style={{width: 20}}/></Link><br/><br/>

      </div>
    );
  }
}