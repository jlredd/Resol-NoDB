import React from 'react';
import styled from 'styled-components';

const DonorProfile = (props) => {
  return (
    <DonorProfileContainer>
      <Img src={props.img}/>
      <Name>{props.name}</Name>
      <Title>{props.title}</Title>    
    </DonorProfileContainer>
  )
}

export default DonorProfile

const DonorProfileContainer = styled.section`
  // background-color: black;
  width: 30%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Name = styled.h1`
  font-size: 30px;
`

const Title = styled.h2`
  font-size: 20px;
`