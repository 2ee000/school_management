import React, { Component } from 'react';
import axios from 'axios';
import '../styles/teachers_adddata.css';
import Teachers_sidebar from '../components/Teachers_sidebar';
import Topbar from '../components/Topbar';
//import Teachers_addanother from '../components/Teachers_addanother';

class Teachers_adddata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      identificationNumber: '',
      class: '',
      gender: '',
      password: '',
      phoneNumber: '',
      subject: '',
      emailAddress: '',
      about: ''
    };
    this.signupAxios = this.signupAxios.bind(this);
    this.teacherCheck = this.teacherCheck.bind(this);
    this.teacherError = this.teacherError.bind(this);
    this.addTeacherButton = this.addTeacherButton.bind(this);
  }
  
  async signupAxios() {
    await axios.post('http://15.164.100.35:12044/admin/1/teacher/', {
      teacher_name : this.state.fullName,
      teacher_code : this.state.identificationNumber,
      teacher_email : this.state.emailAddress,
      password : this.state.password,
      class : this.state.class,
      gender : this.state.gender,
      subject : this.state.subject,
      phone_number : this.state.phoneNumber,
    })
    .then((response) => {
      console.log(response);
      if(response.data.statusCode === 201) {
        window.location.replace('/dashboard')
      }
    }) .catch((error) => {
      console.log(error);
      if(error.response.data.statusCode === 400) {
        window.alert('Duplicate information exist!');
      }
    })
  }

  async teacherCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  teacherError() {
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
    } else if(this.state.subject === '' || this.state.subject == 'select') {
      window.alert('Please select your subject!');
      return;
    } else if(this.state.emailAddress === '') {
      window.alert('Please enter your email address!');
      return;
    } else {
      console.log('teacherAxios!');
      this.signupAxios();
    }
  }

  addTeacherButton() {
    this.teacherError();
    console.log(this.state);
  }

  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Teachers_sidebar />
        <div className='teacher__wrapper'>
          <div className='teacher__adddata'>
            <div className='adddata__text'>
              <p className='adddata__text--title'>Add Teachers</p>
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
                  onChange={this.teacherCheck}/>
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Identification number</p>
                  <input className='data__input' type='text'
                  name='identificationNumber'
                  value={this.state.identificationNumber}
                  onChange={this.teacherCheck}/>
                </div>
                <div className='adddata__data'>
                  <p>Class</p>
                  <select className='data__select'
                  name='class'
                  value={this.state.class}
                  onChange={this.teacherCheck}>
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
                  onChange={this.teacherCheck}>
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
                  onChange={this.teacherCheck}/>
                </div>
                <div className='adddata__data'>
                  <p>Phone number</p>
                  <input className='data__input' type='number'
                  name='phoneNumber'
                  value={this.state.phoneNumber}
                  onChange={this.teacherCheck}/>
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Subject</p>
                  <select className='data__select data__select--big'
                  name='subject'
                  value={this.state.subject}
                  onChange={this.teacherCheck}>
                    <option>select</option>
                    <option value={0} label='Korean Language'/>
                    <option value={1} label='Mathematics'/>
                    <option value={2} label='Social'/>
                    <option value={3} label='Science'/>
                    <option value={4} label='English'/>
                  </select>
                </div>
                <div className='adddata__data'>
                  <p>Email address</p>
                  <input className='data__input' type='text'
                  name='emailAddress'
                  value={this.state.emailAddress}
                  onChange={this.teacherCheck}/>
                </div>
              </div>
              <div className='adddata__buttons'>
                <button><div className='adddata__button--plus'></div>Add another</button>
                <button
                onClick={this.addTeacherButton}>Add Teacher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers_adddata;