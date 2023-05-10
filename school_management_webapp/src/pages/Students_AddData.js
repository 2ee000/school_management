import React, { Component } from 'react';
import axios from 'axios';
import '../styles/students_adddata.css';
import '../styles/students_addanother.css';
import Student_Sidebar from '../components/Student_Sidebar';
import Students_Topbar from '../components/Students_Topbar';

class Students_AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      identificationNumber: '',
      class: '',
      gender: '',
      password: '',
      phoneNumber: '',
      emailAddress: '',
      img: '',
      about: '',
      showImg: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      overlapCheck: false
    };
    this.uploadImg = this.uploadImg.bind(this);
    this.changePage = this.changePage.bind(this);
    this.signupAxios = this.signupAxios.bind(this);
    this.studentCheck = this.studentCheck.bind(this);
    this.studentError = this.studentError.bind(this);
    this.changePageButton = this.changePageButton.bind(this);
    this.cancleButton = this.cancleButton.bind(this);
    this.addStudentButton = this.addStudentButton.bind(this);
  }

  componentDidMount() {
    this.changePage();
  }

  uploadImg() {
    const uploadedImage = React.createRef(null);
    const imageUploader = React.createRef(null);

    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
          this.setState({img: file});
          this.setState({showImg: current.src});
        };
        reader.readAsDataURL(file);
      }
    };
    return (
      <div className='information__profile'>
        <input className="hidden-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
        />
        <div onClick={() => imageUploader.current.click()}>
          <img className='profile__img' ref={uploadedImage} src={this.state.showImg}/>
        </div>
      </div>
    );
  }

  changePage() {
    if(this.state.overlapCheck === false) {
      return (
        <div className='student__adddata'>
          <div className='adddata__text'>
            <p className='adddata__text--title'>Add Students</p>
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
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Identification number</p>
                <input className='data__input' type='text'
                name='identificationNumber'
                value={this.state.identificationNumber}
                onChange={this.studentCheck} />
              </div>
              <div className='adddata__data'>
                <p>Class</p>
                <select className='data__select'
                name='class'
                value={this.state.class}
                onChange={this.studentCheck}>
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
                onChange={this.studentCheck}>
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
                onChange={this.studentCheck} />
              </div>
              <div className='adddata__data'>
                <p>Phone number</p>
                <input className='data__input' type='number'
                name='phoneNumber'
                value={this.state.phoneNumber}
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Email address</p>
                <input className='data__input' type='text'
                name='emailAddress'
                value={this.state.emailAddress}
                onChange={this.studentCheck} />
              </div>
            </div>
            <div className='adddata__buttons'>
              <button
              onClick={this.changePageButton}>
                <div className='adddata__button--plus'></div>Add another</button>
              <button
              onClick={this.addStudentButton}>Add Student</button>
            </div>
          </div>
        </div>
      )
    } else if(this.state.overlapCheck === true) {
      return (
        <div className='student__addanother'>
          <div className='information__profile'>
            {this.uploadImg()}
            <div className='profile__text'>
              <p>{this.state.fullName}</p>
              <p>{this.state.emailAddress}</p>
            </div>
          </div>
          <div className='information__about'>
            <div className='about__text'>
              <p>About</p>
              <textarea type='text'
                name='about'
                value={this.state.about}
                onChange={this.studentCheck}/>
            </div>
            <div className='about__button'>
              <button
              onClick={this.changePageButton}>Edit</button>
              <button
              onClick={this.cancleButton}>Cancel</button>
            </div>
          </div>
        </div>
      )
    }
  }

  async signupAxios() {
    const school_code = localStorage.getItem('school_code');
    const formData = new FormData();
    formData.append('student_name', this.state.fullName);
    formData.append('student_code', this.state.identificationNumber);
    formData.append('student_email', this.state.emailAddress);
    formData.append('password', this.state.password);
    formData.append('class', this.state.class);
    formData.append('gender', this.state.gender);
    formData.append('phone_number', this.state.phoneNumber);
    formData.append('image', this.state.img);
    formData.append('student_about', this.state.about);
    await axios.post(`http://15.164.100.35:12044/admin/${school_code}/student/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response);
      if(response.data.statusCode === 201) {
        window.location.replace('/studentsList')
      }
    }) .catch((error) => {
      console.log(error);
      if(error.response.data.statusCode === 400) {
        window.alert('Duplicate information exist!');
      }
    })
  }

  async studentCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  studentError() {
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
    } else if(this.state.emailAddress === '') {
      window.alert('Please enter your email address!');
      return;
    } else {
      this.signupAxios();
    }
  }

  changePageButton() {
    if(this.state.overlapCheck === false) {
      this.setState({overlapCheck: true});
    } else if(this.state.overlapCheck === true) {
      this.setState({overlapCheck: false});
    }
  }

  cancleButton() {
    this.setState({img: null});
    this.setState({about: ''});
    this.setState({showImg: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'});
    this.setState({overlapCheck: false});
  }

  addStudentButton() {
    this.studentError();
    console.log(this.state);
  }

  render() {
    return (
      <div className='student__app'>
        <Students_Topbar />
        <Student_Sidebar />
        <div className='student__wrapper'>
          {this.changePage()}
        </div>
      </div>
    );
  }
}

export default Students_AddData;