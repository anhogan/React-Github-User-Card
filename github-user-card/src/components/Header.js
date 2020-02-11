import React from 'react';
import github from '../github.png';

const Header = () => {
  return (
    <div>
      <img src={github} alt="GitHub logo" />
      <h1>GitHub User Snapshot</h1>
    </div>
  )
};

export default Header;