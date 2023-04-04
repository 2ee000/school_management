import React, { Component } from "react";
import '../styles/topbar.css';

class Students_Topbar extends Component {
  constructor(props) {
    super(props);
    this.goAdminLogin = this.goAdminLogin.bind(this);
  }

  goAdminLogin() {
    localStorage.clear(); // 토큰 지우기
    window.location.replace('/adminLogin');
  }

  render() {
    return (
      <div className='topbar'>
        <div className="topbar__button">
          <button className="topbar__button--csv">Export CSV</button>
          <button className="topbar__button--add">Add Students</button>
        </div>
        <div className="topbar__user">
          <div className="bell"></div>
          <p className="logout"
          onClick={this.goAdminLogin}>Log out</p>
        </div>
      </div>
    );
  }
}

export default Students_Topbar;