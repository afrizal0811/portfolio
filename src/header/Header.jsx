import React from 'react'
// import Hamburger from '../components/hamburger/Hamburger'
import { StyledMenu } from '../menu/StyledComponents'
import { StyledLogo, StyledHeader } from './StyledComponents'

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <StyledLogo src='logo.png' />
        <StyledMenu />
      </StyledHeader>
    </div>
  )
}

export default Header
