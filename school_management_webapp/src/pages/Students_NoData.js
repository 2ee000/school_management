import React, { Component } from 'react';
import '../styles/students_nodata.css';
import Sidebar from '../components/Sidebar';
import Students_Topbar from '../components/Students_Topbar';
import Search from '../components/Search';

class Students_NoData extends Component {
  render() {
    return (
      <div className='student__app'>
        <Students_Topbar />
        <Sidebar />
        <div className='student__wrapper'>
          <Search />
          <div className='student__nodata'>
            <div className='student__nodata--img'></div>
            <p>No Students at this time</p>
            <p>Students will appear here after they enroll in your school.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Students_NoData;