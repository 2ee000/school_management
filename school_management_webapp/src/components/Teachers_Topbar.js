import React, { Component } from "react";
import '../styles/topbar.css';

class Teachers_Topbar extends Component {
  constructor(props) {
    super(props);
    this.goAddTeacher = this.goAddTeacher.bind(this);
    this.goAdminLogin = this.goAdminLogin.bind(this);
  }

  goAddTeacher() {
    window.location.replace('/teachersAddData');
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
          <button className="topbar__button--add"
          onClick={this.goAddTeacher}>Add Teachers</button>
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

export default Teachers_Topbar;