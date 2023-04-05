import React, { Component } from 'react';
import axios from 'axios';
import '../styles/teachers_list.css';
import '../styles/teachers_nodata.css';
import Teachers_Sidebar from '../components/Teachers_Sidebar';
import Teachers_Topbar from '../components/Teachers_Topbar';
import Search from '../components/Search';

class Teachers_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: []
    }
    this.checkToken = this.checkToken.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeSubjectType = this.changeSubjectType.bind(this);
    this.changeGenderType = this.changeGenderType.bind(this);
    this.makeTeacherList = this.makeTeacherList.bind(this);
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
      this.setState({teacherData: response.data.data});
    }) .catch((error) => {
      console.log(error);
    })
  }

  changePage() {
    if(this.state.teacherData.length === 0) {
      return(
        <div className='teacher__nodata'>
          <p>No Teachers at this time</p>
          <p>Teachers will appear here after they enroll in your school.</p>
        </div>        
      );
    } else {
      return (
        <div className='teacher__list'>
          <div className='list__title'>
            <p>Name</p>
            <p>Subject</p>
            <p>Class</p>
            <p>Email address</p>
            <p>Gender</p>
          </div>
          {this.makeTeacherList()}
        </div>
      );
    }
  }

  changeSubjectType(name) {
    let subject = '';
    if(name.subject === 0) {
      subject = 'Korean Language';
    }
    if(name.subject === 1) {
      subject = 'Mathematics';
    }
    if(name.subject === 2) {
      subject = 'Social';
    }
    if(name.subject === 3) {
      subject = 'Science';
    }
    if(name.subject === 4) {
      subject = 'English';
    }
    return subject
  }

  changeGenderType(name) {
    let gender = '';
    if(name.gender === 0) {
      gender = 'Male';
    }
    if(name.gender === 1) {
      gender = 'Female';
    }
    return gender
  }

  makeTeacherList() {
    const teacherList = this.state.teacherData.map((name) =>
      <div className='list__contents'>
        <div className='list__content'>
          <div className='list__content--name'>
            <img className='name__img' value={name.image}/>
            <p>{name.teacher_name}</p>
          </div>
          <div className='list__content--subject'>
            <p>{this.changeSubjectType(name)}</p>
          </div>
          <div className='list__content--class'>
            <p>{name.class} Grade</p>
          </div>
          <div className='list__content--email'>
            <p>{name.teacher_email}</p>
          </div>
          <div className='list__content--gender'>
            <p>{this.changeGenderType(name)}</p>
          </div>
        </div>
      </div>
    )
    return teacherList
  }

  render() {
    return (
      <div className='teacher__app'>
        <Teachers_Topbar />
        <Teachers_Sidebar />
        <div className='teacher__wrapper'>
          <Search />
          {this.changePage()}
        </div>
      </div>
    );
  }
}

export default Teachers_List;