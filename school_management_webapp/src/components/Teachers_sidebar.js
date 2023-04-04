import React, { Component } from "react";
import '../styles/sidebar.css';

class Teachers_idebar extends Component {
  render() {
    return (
      <div className='sidebar'>
          <div className='school'>
            <div className='school__img'></div>
            <p>Udemy Inter.school</p>
          </div>
          <div className='sidebar__line'></div>
          <div className='sidebar__menus'>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--dashboard'></div>
              <p>Dashboard</p>
            </div>
            <div className='sidebar__menu sidebar__menu--select'>
              <div className='sidebar__icon--teachers'></div>
              <p>Teachers</p>
            </div>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--students'></div>
              <p>Students/ classes</p>
            </div>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--billing'></div>
              <p>Billing</p>
            </div>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--settings'></div>
              <p>Settings and profile</p>
            </div>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--exams'></div>
              <p>Exams</p>
            </div>
            <div className='sidebar__menu'></div>
            <div className='sidebar__menu'></div>
            <div className='sidebar__menu'>
              <div className='sidebar__icon--features'></div>
              <p>Features</p>
              <div className='sidebar__icon--new'></div>
            </div>
          </div>
        </div>
    );
  }
}

export default Teachers_idebar;