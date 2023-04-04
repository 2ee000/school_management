import React, { Component } from 'react';
import '../styles/teachers_nodata.css';
import Teachers_sidebar from '../components/Teachers_sidebar';
import Topbar from '../components/Topbar';
import Search from '../components/Search';

class Teachers_nodata extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Teachers_sidebar />
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

export default Teachers_nodata;