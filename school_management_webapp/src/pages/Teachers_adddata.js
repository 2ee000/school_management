import React, { Component } from 'react';
import axios from 'axios';
import '../styles/teachers_adddata.css';
import '../styles/teachers_addanother.css';
import Teachers_Sidebar from '../components/Teachers_Sidebar';
import Teachers_Topbar from '../components/Teachers_Topbar';


class Teachers_AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      identificationNumber: '',
      class: '',
      gender: '',
      password: '',
      phoneNumber: '',
      subject: '',
      emailAddress: '',
      img: '',
      about: '',
      showImg: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      overlapCheck: false
    };
    this.uploadImg = this.uploadImg.bind(this);
    this.changePage = this.changePage.bind(this);
    this.signupAxios = this.signupAxios.bind(this);
    this.teacherCheck = this.teacherCheck.bind(this);
    this.teacherError = this.teacherError.bind(this);
    this.changePageButton = this.changePageButton.bind(this);
    this.cancleButton = this.cancleButton.bind(this);
    this.addTeacherButton = this.addTeacherButton.bind(this);
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
        <div className='teacher__adddata'>
          <div className='adddata__text'>
            <p className='adddata__text--title'>Add Teachers</p>
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
                onChange={this.teacherCheck}/>
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Identification number</p>
                <input className='data__input' type='text'
                name='identificationNumber'
                value={this.state.identificationNumber}
                onChange={this.teacherCheck}/>
              </div>
              <div className='adddata__data'>
                <p>Class</p>
                <select className='data__select'
                name='class'
                value={this.state.class}
                onChange={this.teacherCheck}>
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
                onChange={this.teacherCheck}>
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
                onChange={this.teacherCheck}/>
              </div>
              <div className='adddata__data'>
                <p>Phone number</p>
                <input className='data__input' type='number'
                name='phoneNumber'
                value={this.state.phoneNumber}
                onChange={this.teacherCheck}/>
              </div>
            </div>
            <div className='adddata__datas'>
              <div className='adddata__data'>
                <p>Subject</p>
                <select className='data__select data__select--big'
                name='subject'
                value={this.state.subject}
                onChange={this.teacherCheck}>
                  <option>select</option>
                  <option value={0} label='Korean Language'/>
                  <option value={1} label='Mathematics'/>
                  <option value={2} label='Social'/>
                  <option value={3} label='Science'/>
                  <option value={4} label='English'/>
                </select>
              </div>
              <div className='adddata__data'>
                <p>Email address</p>
                <input className='data__input' type='text'
                name='emailAddress'
                value={this.state.emailAddress}
                onChange={this.teacherCheck}/>
              </div>
            </div>
            <div className='adddata__buttons'>
              <button
              onClick={this.changePageButton}>
                <div className='adddata__button--plus'></div>Add another</button>
              <button
              onClick={this.addTeacherButton}>Add Teacher</button>
            </div>
          </div>
        </div>
      )
    } else if(this.state.overlapCheck === true) {
      return (
        <div className='teacher__addanother'>
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
                onChange={this.teacherCheck}/>
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
    formData.append('teacher_name', this.state.fullName);
    formData.append('teacher_code', this.state.identificationNumber);
    formData.append('teacher_email', this.state.emailAddress);
    formData.append('password', this.state.password);
    formData.append('class', this.state.class);
    formData.append('gender', this.state.gender);
    formData.append('subject', this.state.subject);
    formData.append('phone_number', this.state.phoneNumber);
    formData.append('image', this.state.img);
    formData.append('teacher_about', this.state.about);
    await axios.post(`http://15.164.100.35:12044/admin/${school_code}/teacher/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response);
      if(response.data.statusCode === 201) {
        window.location.replace('/teachersList')
      }
    }) .catch((error) => {
      console.log(error);
      if(error.response.data.statusCode === 400) {
        window.alert('Duplicate information exist!');
      }
    })
  }

  async teacherCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
    console.log(this.state[name]);
  }

  teacherError() {
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
    } else if(this.state.subject === '' || this.state.subject == 'select') {
      window.alert('Please select your subject!');
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

  addTeacherButton() {
    this.teacherError();
    console.log(this.state);
  }

  render() {
    return (
      <div className='teacher__app'>
        <Teachers_Topbar />
        <Teachers_Sidebar />
        <div className='teacher__wrapper'>
          {this.changePage()}
        </div>
      </div>
    );
  }
}

export default Teachers_AddData;