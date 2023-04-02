import React, { Component } from 'react';
import '../styles/dashboard.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard__app'>
      <Topbar />
        <Sidebar />
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