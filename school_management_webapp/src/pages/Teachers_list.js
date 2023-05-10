import React, { Component } from 'react';
import axios from 'axios';
import '../styles/teachers_list.css';
import '../styles/teachers_nodata.css';
import '../styles/teachers_information.css';
import '../styles/teachers_edit.css';
import Teachers_Sidebar from '../components/Teachers_Sidebar';
import Teachers_Topbar from '../components/Teachers_Topbar';
import Search from '../components/Search';

class Teachers_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: [],
      editImg: '',
      editName: '',
      editEmail: '',
      editAbout: '',
      editClass: '',
      editGender: '',
      selectedTeacher: null,
      editTeacher: false,
    }
    this.editCheck = this.editCheck.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.changeTeacherInformation = this.changeTeacherInformation.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeTeacherPage = this.changeTeacherPage.bind(this);
    this.changeSubjectType = this.changeSubjectType.bind(this);
    this.changeGenderType = this.changeGenderType.bind(this);
    this.selectTeacherProfile = this.selectTeacherProfile.bind(this);
    this.makeTeacherList = this.makeTeacherList.bind(this);
  }
  
  componentDidMount() {
    this.checkToken();
    this.editCheck();
    if(localStorage.getItem('token') === undefined) {
      window.location.replace('/adminLogin');
    }
  }

  async editCheck(event) {
    const name = event.target.name;
    await this.setState({
      [name]: event.target.value,
    });
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
          this.setState({editImg: file});
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
          <img className='profile__img' ref={uploadedImage} src={'http://15.164.100.35:12044/'+this.state.teacherData[this.state.selectedTeacher].profile_image}/>
        </div>
      </div>
    );
  }

  async checkToken() {
    const school_code = localStorage.getItem('school_code');
    await axios.get(`http://15.164.100.35:12044/admin/${school_code}/teacher/all` , {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      console.log(response);
      this.setState({teacherData: response.data.data});
    }) .catch((error) => {
      console.log(error);
    })
  }

  async changeTeacherInformation() {
    this.setState({editTeacher: false});
    const school_code = localStorage.getItem('school_code');
    const teacherUUID = this.state.teacherData[this.state.selectedTeacher].teacher_uuid;
    const formData = new FormData();
    formData.append('teacher_name', this.state.editName);
    formData.append('teacher_email', this.state.editEmail);
    formData.append('class', this.state.editClass);
    formData.append('gender', this.state.editGender);
    formData.append('image', this.state.editImg);
    formData.append('teacher_about', this.state.editAbout);
    await axios.patch(`http://15.164.100.35:12044/admin/${school_code}/teacher/?teacher_uuid=${teacherUUID}`, formData, {
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
    this.setState({editImg: ''});
    this.setState({editName: ''});
    this.setState({editEmail: ''});
    this.setState({editAbout: ''});
    this.setState({editClass: ''});
    this.setState({editGender: ''});
  }

  changePage() {
    if(this.state.teacherData.length === 0) {
      return(
        <div className='teacher__nodata'>
          <p>No Teachers at this time</p>
          <p>Teachers will appear here after they enroll in your school.</p>
        </div>        
      );
    } else {
      return(
        <div>
          {this.changeTeacherPage()}
        </div>
      )
    }
  }

  changeTeacherPage() {
    if(this.state.selectedTeacher === null) { // teacher list
      return(
        <div className='teacher__list'>
          <div className='list__title'>
            <p>Name</p>
            <p>Subject</p>
            <p>Class</p>
            <p>Email address</p>
            <p>Gender</p>
          </div>
          {this.makeTeacherList()}
        </div>
      )
    } else { // teacher profile
      if(this.state.editTeacher === false) { // teacher profile
        return (
          <div className='teacher__information'>
            <div className='information__profile'>
              <div className='close-button'>
                <img src='https://cdn-icons-png.flaticon.com/512/10125/10125518.png'
                onClick={() => this.setState({selectedTeacher: null})}/>
              </div>
              <img className='profile__img' src={'http://15.164.100.35:12044/'+this.state.teacherData[this.state.selectedTeacher].profile_image}/>
              <div className='profile__text'>
                <p>{this.state.teacherData[this.state.selectedTeacher].teacher_name}</p>
                <p>{this.state.teacherData[this.state.selectedTeacher].teacher_email}</p>
              </div>
              <div className='profile__button'>
                <button className='profile__button--school'></button>
                <button className='profile__button--phone'></button>
                <button className='profile__button--email'></button>
              </div>
            </div>
            <div className='information__about'>
              <div className='about__text'>
                <p>About</p>
                <p>{this.state.teacherData[this.state.selectedTeacher].teacher_about}</p>
              </div>
              <div className='about__etc'>
                <div className='about__class'>
                  <p>Class</p>
                  <p>{this.state.teacherData[this.state.selectedTeacher].class}</p>
                </div>
                <div className='about__gender'>
                  <p>Gender</p>
                  <p>{this.changeGenderType(this.state.teacherData[this.state.selectedTeacher])}</p>
                </div>
              </div>
              <div className='about__more-teachers'>
                <p>Teachers from the same class</p>
                <div className='more-teachers'>
                  <div div className='more-teachers__img'></div>
                  <p>+12 more</p>
                </div>
              </div>
              <div className='edit-button'
              onClick={() => this.setState({editTeacher: true})}>
                <img src='https://cdn4.iconfinder.com/data/icons/dashboard-icons/46/icon-edit-512.png'/>
              </div>
            </div>
          </div>
        )
      } else if(this.state.editTeacher === true) { // teacher profile edit
        return(
          <div className='teacher__edit'>
            <div className='edit__profile'>
              <div className='close-button'>
                <img src='https://cdn-icons-png.flaticon.com/512/10125/10125518.png'
                onClick={() => this.setState({selectedTeacher: null})}/>
              </div>
              {this.uploadImg()}
              <div className='edit__text'>
                <input type='text' placeholder={this.state.teacherData[this.state.selectedTeacher].teacher_name}
                name='editName' onChange={this.editCheck} value={this.state.editName}/>
                <input type='text'placeholder={this.state.teacherData[this.state.selectedTeacher].teacher_email}
                name='editEmail' onChange={this.editCheck} value={this.state.editEmail}/>
              </div>
            </div>
            <div className='edit__profile'>
              <div className='edit__about'>
                <p>About</p>
                <textarea placeholder={this.state.teacherData[this.state.selectedTeacher].teacher_about}
                name='editAbout' onChange={this.editCheck} value={this.state.editAbout}/>
              </div>
              <div className='edit__etc'>
                <div className='edit__class'>
                  <p>Class</p>
                  <select className='edit__select' name='editClass' onChange={this.editCheck} value={this.state.editClass}>
                    <option selected hidden>{this.state.teacherData[this.state.selectedTeacher].class} Grade</option>
                    <option value={1} label='1 Grade'/>
                    <option value={2} label='2 Grade'/>
                    <option value={3} label='3 Grade'/>
                  </select>
                </div>
                <div className='edit__gender'>
                <p>Gender</p>
                  <select className='edit__select' name='editGender' onChange={this.editCheck} value={this.state.editGender}>
                    <option selected hidden>{this.changeGenderType(this.state.teacherData[this.state.selectedTeacher])}</option>
                    <option value={0} label='Male'/>
                    <option value={1} label='Female'/>
                  </select>
                </div>
              </div>
              <div className='edit-button'
              onClick={() => this.changeTeacherInformation()}>
                <img src='https://cdn4.iconfinder.com/data/icons/dashboard-icons/46/icon-edit-512.png'/>
              </div>
            </div>
          </div>
        )
      }
    }
  }

  changeSubjectType(name) {
    let subject = '';
    if(name.subject === 0) {
      subject = 'Korean Language';
    }
    if(name.subject === 1) {
      subject = 'Mathematics';
    }
    if(name.subject === 2) {
      subject = 'Social';
    }
    if(name.subject === 3) {
      subject = 'Science';
    }
    if(name.subject === 4) {
      subject = 'English';
    }
    return subject
  }

  changeGenderType(name) {
    let gender = '';
    if(name.gender === 0) {
      gender = 'Male';
    }
    if(name.gender === 1) {
      gender = 'Female';
    }
    return gender
  }

  async selectTeacherProfile(name) {
    for(let i=0;i<this.state.teacherData.length;i++) {
      if(name.teacher_name === this.state.teacherData[i].teacher_name) {
        await this.setState({selectedTeacher: i});
      }
    }
  }

  makeTeacherList() {
    const teacherList = this.state.teacherData.map((name) =>
      <div className='list__contents'
      key={name.teacher_name}
      onClick={() => this.selectTeacherProfile(name)}>
        <div className='list__content'>
          <div className='list__content--name'>
            <img className='name__img' src={'http://15.164.100.35:12044/'+name.profile_image}/>
            <p>{name.teacher_name}</p>
          </div>
          <div className='list__content--subject'>
            <p>{this.changeSubjectType(name)}</p>
          </div>
          <div className='list__content--class'>
            <p>{name.class} Grade</p>
          </div>
          <div className='list__content--email'>
            <p>{name.teacher_email}</p>
          </div>
          <div className='list__content--gender'>
            <p>{this.changeGenderType(name)}</p>
          </div>
        </div>
      </div>
    )
    return teacherList
  }

  render() {
    return (
      <div className='teacher__app'>
        <Teachers_Topbar />
        <Teachers_Sidebar />
        <div className='teacher__wrapper'>
          <Search />
          {this.changePage()}
        </div>
      </div>
    );
  }
}

export default Teachers_List;