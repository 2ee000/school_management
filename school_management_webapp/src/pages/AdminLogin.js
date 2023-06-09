import React from 'react';
import axios from 'axios';
import '../styles/login.css';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminName: '',
      schoolData: [],
      password: ''
    };
    this.loginAxios = this.loginAxios.bind(this);
    //this.schoolAxios = this.schoolAxios.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
    this.loginError = this.loginError.bind(this);
    this.loginButton = this.loginButton.bind(this);
  }

  // componentDidMount() {
  //   this.schoolAxios();
  // }
  
  async loginAxios() {
    await axios.post("http://15.164.100.35:12044/admin/login", {
      admin_name: this.state.adminName,
      admin_pwd: this.state.password,
    })
    .then((response) => {
      localStorage.clear(); // 모든 데이터 삭제
      localStorage.setItem('token', response.data.token); // token 저장
      localStorage.setItem('school_code', response.data.school_code); // school code 저장
      window.location.replace('/dashboard');
    }).catch((error) => {
      console.log(error);
      if(error.response.status === 400) {
        window.alert('Please check the admin name or password!');
      }
    })
  }

  // async schoolAxios() {
  //   await axios.get('http://15.164.100.35:12044/school/all')
  //   .then((response) => {
  //     this.setState({schoolData: response.data.data});
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  async loginCheck(event) { // 입력한 정보 체크
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  loginError() { // 입력한 정보가 없을 때
    if(this.state.adminName === '') {
      window.alert('Please enter the admin name!');
      return;
    } else if(this.state.password === '') {
      window.alert('Please enter your password!');
      return;
    } else {
      this.loginAxios();
    }
  }

  loginButton() {
    this.loginError();
  }

  render() {
    return (
      <div className='admin-login__app'>
        <p className='admin-login__title'>Welcome, Login into you account</p>
        <div className='admin-login__wrapper'>
          <p>It is our great pleasure to have you on board!</p>
          <input
          className='admin-login__input'
          type='text' placeholder='Enter the admin name'
          name='adminName'
          value={this.state.adminName}
          onChange={this.loginCheck}/>
          <input
          className='admin-login__input'
          type='password' placeholder='Enter Password'
          name='password'
          value={this.state.password}
          onChange={this.loginCheck}/>
          <button
          className='admin-login__button'
          onClick={this.loginButton}>Login</button>
          <div className='admin-login__go-signup'>
            <p>If you don't have an account?&nbsp;</p>
            <a href='/adminSignup'>Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;