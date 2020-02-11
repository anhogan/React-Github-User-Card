import React from 'react';
import github from '../github.png';
import { HeaderDiv, HeaderImage, HeaderText } from './StyledComponents';
import { gsap } from 'gsap';

const Header = () => {
  const animate = () => {
    gsap.to('.image', {duration: 3, x: 1200, ease: "back"})
  }

  return (
    <HeaderDiv>
      <HeaderImage onMouseEnter={animate} className="image" src={github} alt="GitHub logo" />
      <HeaderText>GitHub User Snapshot</HeaderText>
    </HeaderDiv>
  )
};

export default Header;