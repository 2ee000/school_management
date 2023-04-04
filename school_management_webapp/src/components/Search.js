import React, { Component } from "react";
import '../styles/search.css';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <select>
          <option>Add filter</option>
          <option>옵션1</option>
          <option>옵션2</option>
          <option>옵션3</option>
        </select>
        <div className='search-box'>
          <div className='search__icon'></div>
          <input type='text' placeholder='Search for by name or email'/>
        </div>
      </div>
    );
  }
}

export default Search;