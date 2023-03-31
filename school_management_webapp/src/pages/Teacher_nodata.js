import React, { Component } from 'react';
import '../styles/teacher_nodata.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Search from '../components/Search';

class Teacher_nodata extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Sidebar />
        <div className='teacher__wrapper'>
          <Search />
          <div className='teacher__nodata'>
            <p>No Teachers at this time</p>
            <p>Teachers will appear here after they enroll in your school.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher_nodata;