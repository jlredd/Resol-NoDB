import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <CompanyName>RESOL</CompanyName>
      <NavBar />
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  // background-color: beige;
  width: 100%;
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  // padding: 60px;
`

const CompanyName = styled.h1`
  font-size: 120px;
  letter-spacing: 20px;

  text-shadow: 15px 10px 8px grey;

  margin-bottom: 30px;
`