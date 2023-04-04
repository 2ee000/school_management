import React from 'react';
// import axios from 'axios';
import '../styles/signup.css';
import '../styles/signup_password.css';


class AdminSignup_Password extends React.Component {
  constructor(props) {
    super(props);
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
            name='password'
            value={this.props.password}
            onChange={this.props.signupCheck}/>
          </div>
          <div className='admin-signup__box'>
            <p>Confirm passwrod</p>
            <input className='admin-signup__input'
            type='password' placeholder='Enter the password'
            name='passwordCheck'
            value={this.props.passwordCheck}
            onChange={this.props.signupCheck}/>
            <p className='least-password'>Must be at least 8 characters.</p>
            </div>
          <button className='admin-signup__button'
          onClick={this.props.passwordNextButton}>Next</button>
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