import React, { Component } from 'react';
import '../styles/teachers_information.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Search from '../components/Search';

class Teachers_information extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Sidebar />
        <div className='teacher__wrapper'>
          <Search />
          <div className='teacher__information'>
            <div className='information__profile'>
              <div className='profile__img'></div>
              <div className='profile__text'>
                <p>School Management</p>
                <p>Webapp</p>
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
                <p>about school management please enter the information</p>
              </div>
              <div className='about__etc'>
                <div className='about__age'>
                  <p>Age</p>
                  <p>24</p>
                </div>
                <div className='about__gender'>
                  <p>Gender</p>
                  <p>Female</p>
                </div>
              </div>
              <div className='about__more-teachers'>
                <p>Teachers from the same class</p>
                <div className='more-teachers'>
                  <div div className='more-teachers__img'></div>
                  <p>+12 more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers_information;