import React, { Component } from "react";
import '../styles/topbar.css';

class Topbar extends Component {
  render() {
    return (
      <div className='topbar'>
        <div className="topbar__button">
          <button className="topbar__button--csv">Export CSV</button>
          <button className="topbar__button--add">Add Teachers</button>
        </div>
        <div className="topbar__user">
          <div className="bell"></div>
          <p className="logout">Log out</p>
        </div>
      </div>
    );
  }
}

export default Topbar;