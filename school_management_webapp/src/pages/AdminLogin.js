import React from 'react';
import '../styles/login.css';

class AdminLogin extends React.Component {
  render() {
    return (
      <div className='admin-login__app'>
        <p className='admin-login__title'>Welcome, Login into you account</p>
        <div className='admin-login__wrapper'>
          <p>It is our great pleasure to have you on board!</p>
          <select>
            <option>Select the name of school</option>
            <option>옵션1</option>
            <option>옵션2</option>
            <option>옵션3</option>
          </select>
          <input className='admin-login__input' type='password' placeholder='Enter Password'/>
          <button className='admin-login__button'>Next</button>
          <div className='admin-login__go-signup'>
            <p>If you don't have an account?&nbsp;</p>
            <a href='#'>Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;