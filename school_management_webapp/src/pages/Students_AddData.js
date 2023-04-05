import React, { Component } from 'react';
import axios from 'axios';
import '../styles/students_adddata.css';
import Student_Sidebar from '../components/Student_Sidebar';
import Students_Topbar from '../components/Students_Topbar';
import Search from '../components/Search';

class Students_AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      identificationNumber: '',
      class: '',
      gender: '',
      password: '',
      phoneNumber: '',
      emailAddress: '',
      about: '',
      overlapCheck: false
    };
    this.changePage = this.changePage.bind(this);
    this.signupAxios = this.signupAxios.bind(this);
    this.studentCheck = this.studentCheck.bind(this);
    this.studentError = this.studentError.bind(this);
    this.addStudentButton = this.addStudentButton.bind(this);
  }

  componentDidMount() {
    this.changePage();
  }

  changePage() {
    if(this.state.overlapCheck === false) {
      return (
        <div className='student__adddata'>
          <div className='adddata__text'>
            <p className='adddata__text--title'>Add Students</p>
            <div className='adddata__text--etc'>
              <a>Manually</a>
              <a>Import CSV</a>
            </div>
          </div>
          <div className='adddata__input'>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Full Name</p>
                <input
                className='data__input data__input--big' type='text'
                name='fullName'
                value={this.state.fullName}
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Identification number</p>
                <input className='data__input' type='text'
                name='identificationNumber'
                value={this.state.identificationNumber}
                onChange={this.studentCheck} />
              </div>
              <div className='adddata__data'>
                <p>Class</p>
                <select className='data__select'
                name='class'
                value={this.state.class}
                onChange={this.studentCheck}>
                  <option>select</option>
                  <option value={1} label='1 Grade'/>
                  <option value={2} label='2 Grade'/>
                  <option value={3} label='3 Grade'/>
                </select>
              </div>
              <div className='adddata__data'>
                <p>Gender</p>
                <select className='data__select'
                name='gender'
                value={this.state.gender}
                onChange={this.studentCheck}>
                  <option>select</option>
                  <option value={0} label='Male'/>
                  <option value={1} label='Female'/>
                </select>
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Password</p>
                <input className='data__input' type='password'
                name='password'
                value={this.state.password}
                onChange={this.studentCheck} />
              </div>
              <div className='adddata__data'>
                <p>Phone number</p>
                <input className='data__input' type='number'
                name='phoneNumber'
                value={this.state.phoneNumber}
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Email address</p>
                <input className='data__input' type='text'
                name='emailAddress'
                value={this.state.emailAddress}
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__buttons'>
              <button
              onClick={this.changePageButton}>
                <div className='adddata__button--plus'></div>Add another</button>
              <button
              onClick={this.addStudentButton}>Add Student</button>
            </div>
          </div>
        </div>
      )
    } else if(this.state.overlapCheck === true) {
      return (
        <div className='student__addanother'>
          <div className='information__profile'>
            <div className='profile__img'></div>
            <div className='profile__text'>
              <p>{this.state.fullName}</p>
              <p>{this.state.identificationNumber}</p>
            </div>
          </div>
          <div className='information__about'>
            <div className='about__text'>
              <p>About</p>
              <textarea type='text'
                name='about'
                value={this.state.about}
                onChange={this.studentCheck}/>
            </div>
            <div className='about__button'>
              <button
              onClick={this.changePageButton}>Edit</button>
              <button
              onClick={this.cancleButton}>Cancel</button>
            </div>
          </div>
        </div>
      )
    }
  }

  async signupAxios() {
    await axios.post('http://15.164.100.35:12044/admin/1/student/', {
      student_code : this.state.identificationNumber,
      student_name : this.state.fullName,
      student_email : this.state.emailAddress,
      password : this.state.password,
      class : this.state.class,
      gender : this.state.gender,
      phone_number : this.state.phoneNumber,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response);
      console.log('됐음');
      if(response.data.statusCode === 201) {
        window.location.replace('/studentsList')
      }
    }) .catch((error) => {
      console.log(error);
      console.log('안됐음');
      if(error.response.data.statusCode === 400) {
        window.alert('Duplicate information exist!');
      }
    })
  }

  async studentCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  studentError() {
    if(this.state.fullName === '') {
      window.alert('Please enter the full name!');
      return;
    } else if(this.state.identificationNumber === '') {
      window.alert('Please enter the identification number!');
      return;
    } else if(this.state.class === '' || this.state.class == 'select') {
      window.alert('Please select a class!');
      return;
    } else if(this.state.gender === '' || this.state.gender == 'select') {
      window.alert('Please select your gender!');
      return;
    } else if(this.state.password === '') {
      window.alert('Please enter a password!');
      return;
    } else if(this.state.phoneNumber === '') {
      window.alert('Please enter your phone number!');
      return;
    } else if(this.state.emailAddress === '') {
      window.alert('Please enter your email address!');
      return;
    } else {
      this.signupAxios();
    }
  }

  changePageButton() {
    if(this.state.overlapCheck === false) {
      this.setState({overlapCheck: true});
    } else if(this.state.overlapCheck === true) {
      this.setState({overlapCheck: false});
    }
  }

  cancleButton() {
    this.setState({about: null});
    this.setState({overlapCheck: false});
  }

  addStudentButton() {
    this.studentError();
    console.log(this.state);
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

export default Students_AddData;