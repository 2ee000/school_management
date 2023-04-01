import React, { Component } from 'react';
import '../styles/students_adddata.css';
import Sidebar from '../components/Sidebar';
import Students_Topbar from '../components/Students_Topbar';
import Search from '../components/Search';

class Students_AddData extends Component {
  render() {
    return (
      <div className='student__app'>
        <Students_Topbar />
        <Sidebar />
        <div className='student__wrapper'>
          <Search />
          <div className='student__adddata'>
            <div className='adddata__text'>
              <p className='adddata__text--title'>Add Students</p>
              <div className='adddata__text--etc'>
                <a>Manually</a>
                <a>Import CSV</a>
              </div>
            </div>
            <div className='adddata__input'>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Name</p>
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
                  <p>Email address</p>
                  <input className='data__input' type='text'/>
                </div>
                <div className='adddata__data'>
                  <p>Phone number</p>
                  <input className='data__input' type='number'/>                  
                </div>
              </div>
              <div className='adddata__datas'>
                <div className='adddata__data'>
                  <p>Password</p>
                  <input className='data__input' type='text'/>
                </div>
              </div>
              <div className='adddata__buttons'>
                <button><div className='adddata__button--plus'></div>Add another</button>
                <button>Add Students</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Students_AddData;