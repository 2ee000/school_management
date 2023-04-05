import React, { Component } from "react";
import axios from 'axios';
import '../styles/sidebar.css';

class Dashboard_Sidebar extends Component {
  constructor(props) {
    super(props);
    this.checkToken = this.checkToken.bind(this);
    this.goDashboard = this.goDashboard.bind(this);
    this.goTeachers = this.goTeachers.bind(this);
    this.goStudents = this.goStudents.bind(this);
  }

  componentDidMount() {
    this.checkToken();
    if(localStorage.getItem('token') === undefined) {
      window.location.replace('/adminLogin');
    }
  }

  async checkToken() {
    await axios.get('http://15.164.100.35:12044/admin/1/teacher/all' , {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      console.log(response);
    }) .catch((error) => {
      console.log(error);
    })
  }

  goDashboard() {
    window.location.replace('/dashboard');
  }

  goTeachers() {
    window.location.replace('/teachersList');
  }

  goStudents() {
    window.location.replace('/studentsList');
  }

  render() {
    return (
      <div className='sidebar'>
          <div className='school'>
            <div className='school__img'></div>
            <p>Udemy Inter.school</p>
          </div>
          <div className='sidebar__line'></div>
          <div className='sidebar__menus'>
            <div className='sidebar__menu sidebar__menu--select'
            onClick={this.goDashboard}>
              <div className='sidebar__icon--dashboard'></div>
              <p>Dashboard</p>
            </div>
            <div className='sidebar__menu'
            onClick={this.goTeachers}>
              <div className='sidebar__icon--teachers'></div>
              <p>Teachers</p>
            </div>
            <div className='sidebar__menu'
            onClick={this.goStudents}>
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

export default Dashboard_Sidebar;
