import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h3>Find a User</h3>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="search" className="searchBar" onChange={props.handleChange} value={props.input} />
        <button>Get User!</button>
      </form>
    </div>
  )
};

export default SearchBar;