import React from 'react';
import styled from 'styled-components';

const TeamMember = (props) => {
  return (
    <ProfileContainer>
      <ProfileImage src={props.img}/>
      <InfoContainer>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </InfoContainer>
    </ProfileContainer>
  )
}

export default TeamMember;

const ProfileContainer = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;

  margin-bottom: 50px;

  padding: 200px;
`

const ProfileImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  margin-right: 50px;
`

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 50px;
`

const Name = styled.h1`
  width: 100%;

  font-size: 60px;

  text-align: left;
`

const Description = styled.p`
  width: 100%;
  height: 50%;

  font-size: 20px;

  text-align: left;

  line-height: 2.5;
`