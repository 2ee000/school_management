import React, { Component } from 'react';
import '../styles/teachers_nodata.css';
import Teachers_Sidebar from '../components/Teachers_Sidebar';
import Teachers_Topbar from '../components/Teachers_Topbar';
import Search from '../components/Search';

class Teachers_NoData extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Teachers_Topbar />
        <Teachers_Sidebar />
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

export default Teachers_NoData;