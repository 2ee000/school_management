import React from 'react';
// import axios from 'axios';
import '../styles/signup.css';
import '../styles/signup_password.css';


class AdminSignup_Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminPassword: '',
      checkPassword: ''
    };
    /*this.passwordAxios = this.passwordAxios.bind(this);*/
    this.passwordCheck = this.passwordCheck.bind(this);
    this.passwordError = this.passwordError.bind(this);
    this.nextButton = this.nextButton.bind(this);

  }

  /*async passwordAxios() {
    await axios.post('서버',{
      서버에서 admin password: this.state.adminPassword,
    })
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }*/

  async passwordCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  passwordError() {
    if(this.state.adminPassword === '') {
      window.alert('Please enter a password!');
      return;
    } else if(this.state.checkPassword === '') {
      window.alert('Please enter password confirmation!');
      return;
    } else if(this.state.adminPassword.length < 8 || this.state.checkPassword < 8) {
      window.alert('Please enter a password of at least 8 characters!');
      return;
    } else if(this.state.adminPassword != this.state.checkPassword) {
      window.alert('Please check your password!');
      return;
    } /*else {
      this.passwordAxios();
    }*/
  }

  nextButton() {
    console.log(this.state);
    this.passwordError();
  }

  render() {
    return (
      <div className='admin-signup__app'>
        <p className='admin-signup__title'>Udemy school, Choose your password</p>
        <div className='admin-signup__wrapper password__wrapper'>
          <div className='admin-signup__box'>
            <p>Choose a password</p>
            <input className='admin-signup__input'
            type='password' placeholder='Enter the password'
            name='adminPassword'
            value={this.state.adminPassword}
            onChange={this.passwordCheck}/>
          </div>
          <div className='admin-signup__box'>
            <p>Confirm passwrod</p>
            <input className='admin-signup__input'
            type='password' placeholder='Enter the password'
            name='checkPassword'
            value={this.state.checkPassword}
            onChange={this.passwordCheck}/>
            <p className='least-password'>Must be at least 8 characters.</p>
            </div>
          <button className='admin-signup__button'
          onClick={this.nextButton}>Next</button>
        </div>
        <div className='admin-signup__step'>
          <div className='step__icon'>
            <div className='step__icon--check'></div>
            <div className='step__line'></div>
            <div className='step__icon--blue'></div>
            <div className='step__line'></div>
            <div className='step__icon--gray'></div>
          </div>
          <div className='step__text'>
            <div className='step__text--basic'>
              <p>Your details</p>
              <p>Name and school</p>
            </div>
            <div className='step__text--basic step__text--blue'>
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

export default AdminSignup_Password;