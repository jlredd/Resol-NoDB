import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
  width: 100%;
  height: 85vh;

  display: flex;
	// flex-direction: row;
	// flex-wrap: wrap;
	// justify-content: center;
	// align-items: center;
	// align-content: space-around;
`

const WomanProfileContainer = styled.section`
  width: 20%;
  height: 60%;

  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 20px 45px;
`

const ProfileImage = styled.section`
  width: 100%;
  height: 40%;
  background-color: black;
`

const Name = styled.h3`

`

const Cost = styled.h2`

`

const Description = styled.p`
  
`

const ButtonContainer = styled.section`

`

const Button = styled.button`
  
`

const WomanProfile = () => {
  return (
    // <MainContainer>
      <WomanProfileContainer>
        <ProfileImage />
        <Name>Fake Name</Name>
        <Cost>$500</Cost>
        <Description>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </Description>
        <ButtonContainer>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonContainer>
      </WomanProfileContainer>
    // </MainContainer>
  )
}

export default WomanProfile;