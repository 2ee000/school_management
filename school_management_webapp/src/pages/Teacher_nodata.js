import React, { Component } from 'react';
import '../styles/teacher_nodata.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

class Teacher_nodata extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Sidebar />
        <Topbar />
        <div className='teacher__wrapper'>
          
        </div>
      </div>
    );
  }
}

export default Teacher_nodata;