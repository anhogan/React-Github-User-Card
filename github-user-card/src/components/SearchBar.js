import React from 'react';
import {SearchDiv, SearchTitle, SearchInput, SearchButton } from './StyledComponents';

const SearchBar = (props) => {
  return (
    <SearchDiv>
      <SearchTitle>Find a User</SearchTitle>
      <form onSubmit={props.handleSubmit}>
        <SearchInput type="text" name="search" className="searchBar" onChange={props.handleChange} value={props.input} />
        <SearchButton>Get User!</SearchButton>
      </form>
    </SearchDiv>
  )
};

export default SearchBar;