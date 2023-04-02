import React from 'react';
import '../styles/signup.css';
import '../styles/signup_information.css';


class AdminSignup_Information extends React.Component {
  render() {
    return (
      <div className='admin-signup__app'>
        <p className='admin-signup__title'>Welcome, Create your school account</p>
        <div className='admin-signup__wrapper information__wrapper'>
          <p information__wrapper--text>It is our great pleasure to have you on board!</p>
          <input className='admin-signup__input' type='text' placeholder='Enter the name of admin'/>
          <select>
            <option>Select the name of school</option>
            <option>옵션1</option>
            <option>옵션2</option>
            <option>옵션3</option>
          </select>
          <button className='admin-signup__button'>Next</button>
          <div className='admin-signup__go-login'>
            <p>Already have an account?&nbsp;</p>
            <a href='#'>Login</a>
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