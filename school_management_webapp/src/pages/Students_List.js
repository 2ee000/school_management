import React, { Component } from 'react';
import '../styles/students_list.css';
import Student_Sidebar from '../components/Student_Sidebar';
import Students_Topbar from '../components/Students_Topbar';
import Search from '../components/Search';

class Students_List extends Component {
  render() {
    return (
      <div className='student__app'>
        <Students_Topbar />
        <Student_Sidebar />
        <div className='student__wrapper'>
          <Search />
          <div className='student__list'>
            <div className='student__list--wrapper'>
              <div className='student__list--title'>
                <p>Name</p>
                <p>Student ID</p>
                <p>Email address</p>
                <p>Class</p>
                <p>Gender</p>
              </div>
              <div className='student__list--contents'>
                <div className='student__list--content'>
                  <div className='student__list--name'>
                    <div className='name__img'></div>
                    <p>Name</p>
                  </div>
                  <div className='student__list--student-id'>
                    <p>Student ID</p>
                  </div>
                  <div className='student__list--email'>
                    <p>Email address</p>
                  </div>
                  <div className='student__list--class'>
                    <p>Class</p>
                  </div>
                  <div className='student__list--gender'>
                    <p>Gender</p>
                    </div>
                </div>
              </div>
              <div className='student__list--contents'>
                <div className='student__list--content'>
                  <div className='student__list--name'>
                    <div className='name__img'></div>
                    <p>Name</p>
                  </div>
                  <div className='student__list--student-id'>
                    <p>Student ID</p>
                  </div>
                  <div className='student__list--email'>
                    <p>Email address</p>
                  </div>
                  <div className='student__list--class'>
                    <p>Class</p>
                  </div>
                  <div className='student__list--gender'>
                    <p>Gender</p>
                    </div>
                </div>
              </div>
            </div>
            <div className='student__profile'>
              <p className='student__profile--student-id'>000122</p>
              <div className='student__profile--img'></div>
              <p className='student__profile--name'>School Management</p>
              <p className='student__profile--subject'>Webapp</p>
              <div className='student__profile--buttons'>
                <div className='student__profile--school'></div>
                <div className='student__profile--phone'></div>
                <div className='student__profile--email'></div>
              </div>
              <div className='student__profile--about'>
                <p>About</p>
                <p>about student</p>
              </div>
              <div className='student__profile--etc'>
                <div className='student__profile--age'>
                  <p>Age</p>
                  <p>24</p>
                </div>
                <div className='student__profile--gender'>
                  <p>Gender</p>
                  <p>Female</p>
                </div>
              </div>
              <div className='student__profile--more-students'>
                <p>People from the same class</p>
                <div className='more-students'>
                  <div className='more-students__img'></div>
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

export default Students_List;