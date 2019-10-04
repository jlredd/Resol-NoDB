import React, { Component } from 'react';
import styled from 'styled-components';

// const MainContainer = styled.section`
//   width: 100%;
//   height: 85vh;

//   display: flex;
// 	// flex-direction: row;
// 	// flex-wrap: wrap;
// 	// justify-content: center;
// 	// align-items: center;
// 	// align-content: space-around;
// `

const WomanProfileContainer = styled.section`
  background-color: rgba(255, 228, 196, 0.274);

  width: 20%;
  height: 90%;

  border: 1px solid black;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 10px 45px;
`

const ProfileImage = styled.img`
  max-width: 100%;
  max-height: 100%;

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
  // font-family: 'Verdana';
`

const ButtonContainer = styled.section`
  width: 75%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  width: 70px;
  height: 35px;

  border: none;
  border-radius: 10px;

  box-shadow: 0px 0px 20px -1px #000000;

  font-size: 16px;
`

class WomanProfile extends Component {
  constructor(){
    super()

    this.state = {
      allowEdit: false
    }

    // this.props.edit.bind(this)
  }
  
  render(){
    console.log(this.props)
    return (
      // <MainContainer>
        <WomanProfileContainer>
          <ProfileImage src={this.props.profileImage}/>
          <Name>{this.props.name}</Name>
          <Cost>$ {this.props.cost}</Cost>
          <Description>{this.props.description}</Description>
          <ButtonContainer>
            <Button id={this.props.id} onClick={e => this.props.edit(e)}>Edit</Button>
            <Button id={this.props.id} onClick={e => this.props.delete(e)}>Delete</Button>
          </ButtonContainer>
        </WomanProfileContainer>
      // </MainContainer>
    )
  }
}

export default WomanProfile;