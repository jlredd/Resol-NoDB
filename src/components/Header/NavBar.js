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

  &:hover {
    transition: border .3s;
    border: 1px solid black;
    border-radius: 10px;

    transition: box-shadow .3s;
    box-shadow: 0 0 10px black;
  }

  &:active {
    color: white;

    background-color: black;
  }
`