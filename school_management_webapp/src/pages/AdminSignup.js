import React from 'react';
import axios from 'axios';
import '../styles/signup.css';
import '../styles/signup_information.css';
import AdminSignupInformation from '../components/AdminSignup_Information';
import AdminSignupPassword from '../components/AdminSignup_Password';
import AdminSignupSuccess from '../components/AdminSignup_Success';

class AdminSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminName: '',
      password: '',
      passwordCheck: '',
      schoolName: '',
      schoolData: [],
      overlapCheck: 0,
    };
    this.checkAxios = this.checkAxios.bind(this); // 같은 이름의 사용자가 있는지 check
    this.schoolAxios = this.schoolAxios.bind(this); // 학교 data 받아오기
    this.signupAxios = this.signupAxios.bind(this); // signup data 주기
    this.signupCheck = this.signupCheck.bind(this); // 입력값 check
    this.changePage = this.changePage.bind(this); // page 이동
    this.informationError = this.informationError.bind(this); // 잘못 입력했을 때
    this.passwordError = this.passwordError.bind(this); // 잘못 입력했을 때
    this.informationNextButton = this.informationNextButton.bind(this); // 1page에서 next button click
    this.passwordNextButton = this.passwordNextButton.bind(this); // 2page에서 next button click
    this.makeSelectOptions = this.makeSelectOptions.bind(this); // 학교 data로 select box 만들기
  }

  componentDidMount() {
    this.schoolAxios();
    this.changePage();
  }

  async checkAxios() {
    await axios.post('http://15.164.100.35:12044/admin/check-id', {
      admin_name: this.state.adminName,
      school_code: this.state.schoolName,
    })
    .then((response) => {
      console.log(response);
      if(response.data.statusCode === 200) {
        this.setState({overlapCheck: 1}, () => {
          console.log('overlapcheck',this.state.overlapCheck);
        });
      }
    }).catch((error) => {
      console.log(error);
      if(error.response.status === 400) {
        window.alert('Duplicate admins exist!');
      }
    })
  }

  async schoolAxios() {
    await axios.get('http://15.164.100.35:12044/school/all')
    .then((response) => {
      this.setState({schoolData: response.data.data});
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  async signupAxios() {
    await axios.post('http://15.164.100.35:12044/admin/sign-up', {
      admin_name: this.state.adminName,
      admin_pwd: this.state.password,
      school_code:  this.state.schoolName,
    })
    .then((response) => {
      console.log(response);
      if(response.data.statudCode === 201) {
        this.setState({overlapCheck: 2}, () => {
          console.log('overlapcheck',this.state.overlapCheck);
        });
      }
    }) .catch((error) => {
      console.log(error);
    })
  }

  async signupCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  changePage() {
    if(this.state.overlapCheck === 0) {
      return (
        <AdminSignupInformation
          adminName = {this.state.adminName}
          schoolName = {this.state.schoolName}
          schoolData = {this.state.schoolData}
          checkAxios = {this.checkAxios}
          schoolAxios = {this.schoolAxios}
          signupCheck = {this.signupCheck}
          makeSelectOptions = {this.makeSelectOptions()}
          informationNextButton = {this.informationNextButton} />
      );
    } else if (this.state.overlapCheck === 1) {
      return (
        <AdminSignupPassword
        password = {this.state.password}
        passwordCheck = {this.state.passwordCheck}
        signupCheck = {this.signupCheck}
        passwordNextButton = {this.passwordNextButton}/>
      );
    } else if (this.state.overlapCheck === 2) {
      return (
        <AdminSignupSuccess />
      )
    }
  }
  informationError() {
    if(this.state.adminName === '') {
      window.alert('Please enter the admin name!');
      return;
    } else if(this.state.schoolName === '' || this.state.schoolName == 'Select the name of school') {
      window.alert('Please select a school name!');
      return;
    }else {
      this.checkAxios();
    }
  }

  passwordError() {
    if(this.state.adminPassword === '') {
      window.alert('Please enter a password!');
      return;
    } else if(this.state.checkPassword === '') {
      window.alert('Please enter password confirmation!');
      return;
    } else if(this.state.password.length < 8 || this.state.passwordCheck.length < 8) {
      window.alert('Please enter a password of at least 8 characters!');
      return;
    } else if(this.state.password != this.state.passwordCheck) {
      window.alert('Please check your password!');
      return;
    } else {
      console.log('passwordAxios!');
      this.signupAxios();
    }
  }

  informationNextButton() {
    console.log(this.state);
    this.informationError();
  }

  passwordNextButton() {
    console.log(this.state);
    this.passwordError();
  }

  makeSelectOptions() {
    const optionValue = this.state.schoolData.map((name) =>
    <option
    key={name.school_code} // 추가 안하면 오류
    name='schoolData'
    value={name.school_code}
    label={name.school_name}/>)
    return optionValue
  }

  render() {
    return (
      <div>
        {this.changePage()}
      </div>
    );
  }
}

export default AdminSignup;