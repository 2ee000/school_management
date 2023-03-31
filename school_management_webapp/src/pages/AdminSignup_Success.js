import React from 'react';
import '../styles/signup.css';
import '../styles/signup_success.css';

class AdminSignup_Sucess extends React.Component {
  render() {
    return (
      <div className='admin-signup__app'>
        <p className='admin-signup__title'>Udemy school, Sign up success</p>
        <div className='admin-signup__wrapper success__wrapper'>
          <p>Sign up success go to main page?</p>
          <button className='admin-signup__button' type='submit'>go to main page</button>
        </div>
        <div className='admin-signup__step'>
          <div className='step__icon'>
            <div className='step__icon--check'></div>
            <div className='step__line'></div>
            <div className='step__icon--check'></div>
            <div className='step__line'></div>
            <div className='step__icon--blue'></div>
          </div>
          <div className='step__text'>
            <div className='step__text--basic'>
              <p>Your details</p>
              <p>Name and school</p>
            </div>
            <div className='step__text--basic'>
              <p>Choose your password</p>
              <p>Choose a secure password</p>
            </div>
            <div className='step__text--basic step__text--blue'>
              <p>Success Sign Up</p>
              <p>Start collaborating</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminSignup_Sucess;