import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
      <NavBarContainer>
        <StyledLink to='/our-mission'>Our Mission</StyledLink>
        <StyledLink to='/fund-a-small-business'>Fund A Small Business</StyledLink>
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
`