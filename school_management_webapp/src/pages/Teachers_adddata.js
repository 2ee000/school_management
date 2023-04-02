import React, { Component } from 'react';
import '../styles/teachers_adddata.css';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

class Teachers_adddata extends Component {
  render() {
    return (
      <div className='teacher__app'>
        <Topbar />
        <Sidebar />
        <div className='teacher__wrapper'>
          <div className='teacher__adddata'>
            <div className='adddata__text'>
              <p className='adddata__text--title'>Add Teachers</p>
              <div className='adddata__text--etc'>
                <a>Manually</a>
                <a>Import CSV</a>
              </div>
            </div>
            <div className='adddata__input'>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Full Name</p>
                  <input className='data__input data__input--big' type='text'/>
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Identification number</p>
                  <input className='data__input' type='text'/>
                </div>
                <div className='adddata__data'>
                  <p>Class</p>
                  <select className='data__select'>
                    <option>select</option>
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                  </select>
                </div>
                <div className='adddata__data'>
                  <p>Gender</p>
                  <select className='data__select'>
                    <option>select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Password</p>
                  <input className='data__input' type='password'/>
                </div>
                <div className='adddata__data'>
                  <p>Phone number</p>
                  <input className='data__input' type='number'/>
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Subject</p>
                  <select className='data__select data__select--big'>
                    <option>select</option>
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                  </select>
                </div>
                <div className='adddata__data'>
                  <p>Email address</p>
                  <input className='data__input' type='text'/>
                </div>
              </div>
              <div className='adddata__buttons'>
                <button><div className='adddata__button--plus'></div>Add another</button>
                <button>Add Teacher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teachers_adddata;