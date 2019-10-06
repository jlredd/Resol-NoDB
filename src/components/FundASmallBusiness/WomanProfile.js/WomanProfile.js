import React from 'react';
import styled from 'styled-components';

const WomanProfile = (props) => {
  return (
    props.editCheck[0] && +props.editCheck[1] === props.id ? 
      (
        <WomanProfileContainer>
          {/* <ProfileImage src={props.profileImage}/> */}
          <StyledLabel>Profile Picture: </StyledLabel>
          <StyledInput name="img" defaultValue={props.profileImage} onChange={props.handleChange}/>

          <StyledLabel>Name: </StyledLabel>
          <StyledInput name="name" defaultValue={props.name} onChange={props.handleChange}/>

          <StyledLabel>Cost: </StyledLabel>
          <StyledInput name="cost" defaultValue={props.cost} onChange={props.handleChange}/>

          <StyledLabel>Description: </StyledLabel>
          <StyledInput name="description" defaultValue={props.description} onChange={props.handleChange} style={{height: 100 + "px", width: 400 + "px"}}/>
          <SmallButtonContainer>
            <SmallButton id={props.id} onClick={e => props.save(e)}>Save</SmallButton>
          </SmallButtonContainer>
        </WomanProfileContainer>
      ) 
      :
      (
        <WomanProfileContainer>
          <ProfileImage src={props.profileImage}/>
          <Name>{props.name}</Name>
          <Cost>$ {props.cost}</Cost>
          <Description>{props.description}</Description>
          <SmallButtonContainer>
            <SmallButton id={props.id} onClick={e => props.edit(e)}>Edit</SmallButton>
            <SmallButton id={props.id} onClick={e => props.delete(e)}>Delete</SmallButton>
          </SmallButtonContainer>
        </WomanProfileContainer>
      )
      )
}


export default WomanProfile;
export {StyledInput, StyledLabel, SmallButtonContainer, SmallButton}

const WomanProfileContainer = styled.section`
  // background-color: rgba(255, 228, 196, 0.274);

  width: 30%;
  height: 900px;

  // border: 1px solid black;
  // border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px 45px;

  // margin-top: 20px;
`

const ProfileImage = styled.img`
  max-width: 100%;
  max-height: 40%;

  border-radius: 20px;

  box-shadow: 0px 0px 20px 5px #000000;
  // margin-top: 20px;
`

const Name = styled.h3`
  font-size: 40px;

  // margin-top: 20px;
`

const Cost = styled.h2`
  font-size: 30px;

  // margin-top: 20px;
`

const Description = styled.p`
  font-size: 20px;
  
  // margin-top: 20px;
`

const SmallButtonContainer = styled.section`
  width: 75%;

  display: flex;
  justify-content: center;
  align-items: center;

  // margin-top: 20px;
`

const SmallButton = styled.button`
  width: 70px;
  height: 35px;

  border: none;
  border-radius: 10px;

  box-shadow: 0px 0px 20px -1px #000000;

  font-size: 16px;

  margin: 0 20px;
`

const StyledLabel = styled.label`
  
`

const StyledInput = styled.textarea`
  width: 200px;
  // height: fit-content;

  word-wrap: break-word;

  text-align: center;
`