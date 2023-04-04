import React, { Component } from 'react';
import axios from 'axios';
import '../styles/dashboard.css';
import Dashboard_Sidebar from '../components/Dashboard_Sidebar';

class Dashboard extends Component {
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
      <div className='dashboard__app'>
      <div className='topbar'>
        <div className="topbar__button">
        </div>
        <div className="topbar__user">
          <div className="bell"></div>
          <p className="logout"
          onClick={this.goAdminLogin}>Log out</p>
        </div>
      </div>
        <Dashboard_Sidebar />
        <div className='dashboard__wrapper'>
          <p className='dashboard__title'>Welcome to your dashboard, Udemy school</p>
          <p className='dashboard__email'>Uyo/school/@teachable.com</p>
          <div className='dashboard__menus'>
            <div className='dashboard__menu'>
              <div className='dashboard__icon--admins'></div>
              <div className='dashboard__text'>
                <p>Add other admins</p>
                <p>Create rich course content and coaching products for your students.<br/>
                  When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </div>
            <div className='dashboard__menu'>
              <div className='dashboard__icon--classes'></div>
              <div className='dashboard__text'>
                <p>Add classes</p>
                <p>Create rich course content and coaching products for your students.<br/>
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </div>
            <div className='dashboard__menu'>
              <div className='dashboard__icon--students'></div>
              <div className='dashboard__text'>
                <p>Add students</p>
                <p>Create rich course content and coaching products for your students.<br/>
                When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;