import React, { Component } from 'react';
import axios from 'axios';
import '../styles/students_list.css';
import '../styles/students_nodata.css';
import Student_Sidebar from '../components/Student_Sidebar';
import Students_Topbar from '../components/Students_Topbar';
import Search from '../components/Search';

class Students_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [],
      selectedStudent: null
    }
    this.checkToken = this.checkToken.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeStudentProfile = this.changeStudentProfile.bind(this);
    this.changeGenderType = this.changeGenderType.bind(this);
    this.selectStudentProfile = this.selectStudentProfile.bind(this);
    this.makeStudentList = this.makeStudentList.bind(this);
  }

  componentDidMount() {
    this.checkToken();
    if(localStorage.getItem('token') === undefined) {
      window.location.replace('/adminLogin');
    }
  }

  async checkToken() {
    const school_code = localStorage.getItem('school_code');
    await axios.get(`http://15.164.100.35:12044/admin/${school_code}/student/all` , {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      console.log(response);
      this.setState({studentData: response.data.data});
    }) .catch((error) => {
      console.log(error);
    })
  }

  changePage() {
    if(this.state.studentData.length === 0) {
      return(
        <div className='student__nodata'>
          <div className='student__nodata--img'></div>
          <p>No Students at this time</p>
          <p>Students will appear here after they enroll in your school.</p>
        </div>   
      );
    } else {
      return (
        <div className='student__list'>
          <div className='student__list--wrapper'>
            <div className='student__list--title'>
              <p>Name</p>
              <p>Student ID</p>
              <p>Email address</p>
              <p>Class</p>
              <p>Gender</p>
            </div>
            {this.makeStudentList()}
          </div>
          {this.changeStudentProfile()}
        </div>
      );
    }
  }

  changeStudentProfile(){
    if(this.state.selectedStudent === null) {
      return(
        <div className='student__profile'>
          <p className='student__profile--student-id'>Student ID</p>
          <div className='student__profile--img' ></div>
          <p className='student__profile--name'>Student Name</p>
          <p className='student__profile--email'>Eamil Address</p>
          <div className='student__profile--buttons'>
            <div className='student__profile--school'></div>
            <div className='student__profile--phone'></div>
            <div className='student__profile--address'></div>
          </div>
          <div className='student__profile--about'>
            <p>About</p>
            <p>about student</p>
          </div>
          <div className='student__profile--etc'>
            <div className='student__profile--class'>
              <p>Class</p>
              <p>.</p>
            </div>
            <div className='student__profile--gender'>
              <p>Gender</p>
              <p>.</p>
            </div>
          </div>
          <div className='student__profile--more-students'>
            <p>People from the same class</p>
            <div className='more-students'>
              <div className='more-students__img'></div>
              <p>+ more</p>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className='student__profile'>
          <p className='student__profile--student-id'>{this.state.studentData[this.state.selectedStudent].student_code}</p>
          <img className='student__profile--img' src={'http://15.164.100.35:12044/'+this.state.studentData[this.state.selectedStudent].profile_image}/>
          <p className='student__profile--name'>{this.state.studentData[this.state.selectedStudent].student_name}</p>
          <p className='student__profile--email'>{this.state.studentData[this.state.selectedStudent].student_email}</p>
          <div className='student__profile--buttons'>
            <div className='student__profile--school'></div>
            <div className='student__profile--phone'></div>
            <div className='student__profile--address'></div>
          </div>
          <div className='student__profile--about'>
            <p>About</p>
            <p>{this.state.studentData[this.state.selectedStudent].student_about}</p>
          </div>
          <div className='student__profile--etc'>
            <div className='student__profile--class'>
              <p>Class</p>
              <p>{this.state.studentData[this.state.selectedStudent].class}</p>
            </div>
            <div className='student__profile--gender'>
              <p>Gender</p>
              <p>{this.changeGenderType(this.state.studentData[this.state.selectedStudent])}</p>
            </div>
          </div>
          <div className='student__profile--more-students'>
            <p>People from the same class</p>
            <div className='more-students'>
              <div className='more-students__img'></div>
              <p>+ more</p>
            </div>
          </div>
        </div>
      )
    }
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
  
  async selectStudentProfile(name) {
    for(let i=0;i<this.state.studentData.length;i++) {
      if(name.student_name === this.state.studentData[i].student_name) {
        await this.setState({selectedStudent: i});
      }
    }
  }

  makeStudentList() {
    const studentList = this.state.studentData.map((name) => 
    <div className='student__list--contents'
    key={name.student_name}
    onClick={() => this.selectStudentProfile(name)}>
      <div className='student__list--content'>
        <div className='student__list--name'>
          <img className='name__img' src={'http://15.164.100.35:12044/'+name.profile_image}/>
          <p>{name.student_name}</p>
        </div>
        <div className='student__list--student-id'>
          <p>{name.student_code}</p>
        </div>
        <div className='student__list--email'>
          <p>{name.student_email}</p>
        </div>
        <div className='student__list--class'>
          <p>{name.class} Grade</p>
        </div>
        <div className='student__list--gender'>
          <p>{this.changeGenderType(name)}</p>
          </div>
      </div>
    </div>    
    )
    return studentList
  }

  render() {
    return (
      <div className='student__app'>
        <Students_Topbar />
        <Student_Sidebar />
        <div className='student__wrapper'>
          <Search />
          {this.changePage()}
        </div>
      </div>
    );
  }
}

export default Students_List;