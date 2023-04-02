import React, { Component } from 'react';
import '../styles/teachers_list.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Search from '../components/Search';

class Teachers_list extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Sidebar />
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

export default Teachers_list;