import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '../../images/InstagramIcon.png';
import FacebookIcon from '../../images/FacebookIcon.png';

const Footer = () => {
  return (
    <FooterContainer>
      <ImgContainer>
        <Anchor href="https://www.instagram.com/weareresol/"><ImgButton src={InstagramIcon}/></Anchor>
        <Anchor href="https://www.facebook.com/weareresol/"><ImgButton src={FacebookIcon}/></Anchor>
      </ImgContainer>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgContainer = styled.section`
  width: 20%;

  
  display: flex;
  justify-content: center;
  align-items: center;
  `
  
  const ImgButton = styled.img`
  width: 50px;
  height: 50px;
  
  margin: 0 40px;
`

const Anchor = styled.a`

`