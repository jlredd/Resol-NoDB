import React from 'react';
import styled from 'styled-components';

const WomanProfile = (props) => {
  console.log(props)
  return (
    props.editCheck[0] && +props.editCheck[1] === props.id ?
      (
        <WomanProfileContainer>
          {/* <ProfileImage src={props.profileImage}/> */}
          <StyledLabel>Profile Picture: </StyledLabel>
          <StyledInput name="img" defaultValue={props.profileImage} onChange={props.handleChange} />

          <StyledLabel>Name: </StyledLabel>
          <StyledInput name="name" defaultValue={props.name} onChange={props.handleChange} />

          <StyledLabel>Cost: </StyledLabel>
          <StyledInput name="cost" defaultValue={props.cost} onChange={props.handleChange} />

          <StyledLabel>Description: </StyledLabel>
          <StyledInput name="description" defaultValue={props.description} onChange={props.handleChange} style={{ height: 100 + "px", width: 400 + "px" }} />
          <SmallButtonContainer>
            <SmallButton id={props.id} onClick={e => props.save(e)}>Save</SmallButton>
            <SmallButton id={props.id} onClick={e => props.cancelFn(e)}>Cancel</SmallButton>
          </SmallButtonContainer>
        </WomanProfileContainer>
      )
      :
      (
        <WomanProfileContainer>
          <ProfileImage src={props.profileImage} />
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



const WomanProfileContainer = styled.section`
  width: 30%;
  height: 900px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px 45px;
`

const ProfileImage = styled.img`
  max-width: 100%;
  max-height: 40%;

  border-radius: 20px;

  box-shadow: 0px 0px 20px 5px #000000;
`

const Name = styled.h3`
  font-size: 40px;
`

const Cost = styled.h2`
  font-size: 30px;
`

const Description = styled.p`
  font-size: 20px;
`

const SmallButtonContainer = styled.section`
  width: 75%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const SmallButton = styled.button`
  background-color: rgba(219, 164, 97, 0.274);
  width: 70px;
  height: 35px;
  
  border: none;
  border-radius: 10px;
  
  font-size: 16px;
  font-weight: bolder;
  
  margin: 0 20px;
  
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  
  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
  }
  
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  
  &:focus {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  
  &:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  
  &:hover:before, &:focus:before, &:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  
  // &:hover:before {
  //   opacity: 1;
  //   -webkit-transform: translateY(5px);
  //   transform: translateY(5px);
  // }
    
  // &:focus:before {
  //   opacity: 1;
  //   -webkit-transform: translateY(5px);
  //   transform: translateY(5px);
  // }
  
  // &:active:before {
  //   opacity: 1;
  //   -webkit-transform: translateY(5px);
  //   transform: translateY(5px);
  // }
`

const StyledLabel = styled.label`
        
`

const StyledInput = styled.textarea`
  width: 200px;
  
  word-wrap: break-word;
  
  text-align: center;
`

export default WomanProfile;
export { StyledInput, StyledLabel, SmallButtonContainer, SmallButton }