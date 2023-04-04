import React, { Component } from 'react';
import axios from 'axios';
import '../styles/teachers_list.css';
import Teachers_Sidebar from '../components/Teachers_Sidebar';
import Teachers_Topbar from '../components/Teachers_Topbar';
import Search from '../components/Search';

class Teachers_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: []
    }
    // this.teacherAxios = this.teacherAxios.bind(this);
  }

  // componentDidMount() {
  //   this.teacherAxios();
  // }

  // async teacherAxios() {
  //   await axios.get('http://15.164.100.35:12044/admin/1/teacher/all')
  //   .then((response) => {
  //     this.setState({teacherData: response.data.data});
  //     console.log(this.state);
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  render() {
    return (
      <div className='teacher__app'>
        <Teachers_Topbar />
        <Teachers_Sidebar />
        <div className='teacher__wrapper'>
          <Search />
          <div className='teacher__list'>
            <div className='list__title'>
              <p>Name</p>
              <p>Subject</p>
              <p>Class</p>
              <p>Email address</p>
              <p>Gender</p>
            </div>
            <div className='list__contents'>
              <div className='list__content'>
                <div className='list__content--name'>
                  <div className='name__img'></div>
                  <p>Name</p>
                </div>
                <div className='list__content--subject'>
                  <p>Subject</p>
                </div>
                <div className='list__content--class'>
                  <p>Class</p>
                </div>
                <div className='list__content--email'>
                  <p>Email address</p>
                </div>
                <div className='list__content--gender'>
                  <p>Gender</p>
                </div>
              </div>
            </div>
            <div className='list__contents'>
              <div className='list__content'>
                <div className='list__content--name'>
                  <div className='name__img'></div>
                  <p>Name</p>
                </div>
                <div className='list__content--subject'>
                  <p>Subject</p>
                </div>
                <div className='list__content--class'>
                  <p>Class</p>
                </div>
                <div className='list__content--email'>
                  <p>Email address</p>
                </div>
                <div className='list__content--gender'>
                  <p>Gender</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Teachers_List;