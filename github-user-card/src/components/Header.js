import React from 'react';
import github from '../github.png';
import { HeaderDiv, HeaderImage, HeaderText } from './StyledComponents';

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderImage src={github} alt="GitHub logo" />
      <HeaderText>GitHub User Snapshot</HeaderText>
    </HeaderDiv>
  )
};

export default Header;