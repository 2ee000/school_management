import React, { Component } from 'react';
import '../styles/teachers_addanother.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Search from '../components/Search';

class Teachers_addanother extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Sidebar />
        <div className='teacher__wrapper'>
          <div className='teacher__addanother'>
            <div className='information__profile'>
              <div className='profile__img'></div>
              <div className='profile__text'>
                <p>School Management</p>
                <p>Webapp</p>
              </div>
            </div>
            <div className='information__about'>
              <div className='about__text'>
                <p>About</p>
                <textarea type='text'/>
              </div>
              <div className='about__button'>
                <button>Edit</button>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers_addanother;