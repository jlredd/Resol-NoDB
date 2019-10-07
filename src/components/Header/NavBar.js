import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
      <NavBarContainer>
        <StyledLink to='/our-mission'>Our Mission</StyledLink>
        <StyledLink to='/fund-a-small-business'>Fund A Small Business</StyledLink>
        <StyledLink to='/donors'>Donors</StyledLink>
        <StyledLink to='/our-team'>Our Team</StyledLink>
      </NavBarContainer>
  )
}

export default NavBar;

const NavBarContainer = styled.nav`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: black;
  font-size: 20px;

  text-decoration: none;
  
  padding: 5px;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    // border: #e1e1e1 solid 4px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: border, top, right, bottom, left;
    transition-property: border, top, right, bottom, left;
  }
  
  &:hover:before {
    border: #e1e1e1 solid 4px;
    border-radius: 10px;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }
  
  &:focus:before {
    border: #e1e1e1 solid 4px;
    border-radius: 10px;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }
  
  &:active:before {
    border: #e1e1e1 solid 4px;
    border-radius: 10px;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }

  
`