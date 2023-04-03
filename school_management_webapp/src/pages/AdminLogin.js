import React from 'react';
import '../styles/login.css';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      schoolData: ['school1', 'school2', 'school3'],
      password: ''
    };
    // this.loginAxios = this.loginAxios.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
    this.loginError = this.loginError.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.makeSelectOptions = this.makeSelectOptions.bind(this);
  }

  /*async loginAxios() {
    await axios.post("서버", {
      서버에서 school: this.state.school,
      서버에서 password: this.state.password,
    })
    .then((response) => {
      this.setState({navigateHome: true});
      console.log(response);
      localStorage.clear(); // 모든 데이터 삭제
      localStorage.setItem('token', response.data.token); // token데이터 저장
    }).catch((error) => {
      console.log(error);
    })
  }*/

  async loginCheck(event) { // 입력한 정보 체크
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  loginError() { // 입력한 정보가 없을 때
    if(this.state.school === '') {
      window.alert('Please enter your school!');
      return;
    } else if(this.state.password === '') {
      window.alert('Please enter your password!');
      return;
    } /*else {
      this.loginAxios();
    }*/
  }

  loginButton() {
    console.log(this.state);
    this.loginError();
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
      <div className='admin-login__app'>
        <p className='admin-login__title'>Welcome, Login into you account</p>
        <div className='admin-login__wrapper'>
          <p>It is our great pleasure to have you on board!</p>
          <select
          name='schoolName'
          value={this.state.schoolName}
          onChange={this.loginCheck}>
            <option>Select the name of school</option>
            {this.makeSelectOptions()}
          </select>
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
            <a href='/'>Sign up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;