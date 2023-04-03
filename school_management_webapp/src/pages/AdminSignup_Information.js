import React from 'react';
//import axios from 'axios';
import '../styles/signup.css';
import '../styles/signup_information.css';


class AdminSignup_Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminName: '',
      schoolName: '',
      schoolData: ['school1', 'school2', 'school3']
    };
    /*this.signupAxios = this.signupAxios.bind(this);*/
    /*this.schoolAxios = this.schoolAxios.bind(this);*/
    this.signupCheck = this.signupCheck.bind(this);
    this.signupError = this.signupError.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.makeSelectOptions = this.makeSelectOptions.bind(this);
  }

  /*async signupAxios() {
    await axios.post('서버', {
      서버에서 admin name: this.state.adminName,
      서버에서 school name: this.state.schoolName,
      서버에서 school data: this.state.schoolData,
    })
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }*/

  /*async schoolAxios() {
    await axios.get('서버', {
      서버에서 school data: this.state.schoolData[],
    })
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }*/

  async signupCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  signupError() {
    if(this.state.adminName === '') {
      window.alert('Please enter the admin name!');
      return;
    } else if(this.state.schoolName === '' || this.state.schoolName == 'Select the name of school') {
      window.alert('Please select a school name!');
      return;
    }/*else {
      this.signupAxios();
    }*/
  }

  nextButton() {
    console.log(this.state);
    this.signupError();
  }

  makeSelectOptions() {
    const optionValue = this.state.schoolData.map((name) =>
    <option
    key={name} // 추가 안하면 오류
    name='schoolData'
    value={name}>{name}</option>)
    return optionValue
  }

  render() {
    return (
      <div className='admin-signup__app'>
        <p className='admin-signup__title'>Welcome, Create your school account</p>
        <div className='admin-signup__wrapper information__wrapper'>
          <p className='information__wrapper--text'>It is our great pleasure to have you on board!</p>
          <input className='admin-signup__input'
          type='text' placeholder='Enter the name of admin'
          name='adminName'
          value={this.state.adminName}
          onChange={this.signupCheck}/>
          <select name='schoolName'
          value={this.state.schoolName}
          onChange={this.signupCheck}>
            <option>Select the name of school</option>
            {this.makeSelectOptions()}
          </select>
          <button className='admin-signup__button'
          onClick={this.nextButton}>Next</button>
          <div className='admin-signup__go-login'>
            <p>Already have an account?&nbsp;</p>
            <a href='/'>Login</a>
          </div>
        </div>
        <div className='admin-signup__step'>
          <div className='step__icon'>
            <div className='step__icon--blue'></div>
            <div className='step__line'></div>
            <div className='step__icon--gray'></div>
            <div className='step__line'></div>
            <div className='step__icon--gray'></div>
          </div>
          <div className='step__text'>
            <div className='step__text--basic step__text--blue'>
              <p>Your details</p>
              <p>Name and school</p>
            </div>
            <div className='step__text--basic'>
              <p>Choose your password</p>
              <p>Choose a secure password</p>
            </div>
            <div className='step__text--basic'>
              <p>Success Sign Up</p>
              <p>Start collaborating</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminSignup_Information;