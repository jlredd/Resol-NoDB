import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const ButtonContainer = styled.section`
  width: 75%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // margin-top: 20px;
`

const Button = styled.button`
  width: 70px;
  height: 35px;

  border: none;
  border-radius: 10px;

  box-shadow: 0px 0px 20px -1px #000000;

  font-size: 16px;
`

const StyledLabel = styled.label`
  
`

const StyledInput = styled.textarea`
  width: 200px;
  // height: fit-content;

  word-wrap: break-word;

  text-align: center;
`

class WomanProfile extends Component {
  constructor(props){
    super()

    this.state = {
      allowEdit: false,
      id: props.id,
      img: '',
      name: '',
      cost: 0,
      description: ''
    }

    // this.props.edit.bind(this)
  }

  edit(){
    console.log('Editing')
    this.setState({allowEdit: true})
  }

  save = (e) => {
    console.log('saving')

    const body = {
      id: this.props.id,
      img: this.props.img,
      name: this.props.name,
      cost: this.props.cost,
      description: this.props.description
    }

    console.log(body)

    axios.put(`http://localhost:4423/api/women/${this.props.id}`, body)
    .then(res => this.setState({women: res.data}))
    .catch(err => console.log(err))
  }

  handleChange = (e) => {
    console.log(this.state[e.target.name])
    this.setState({[e.target.name]: e.target.value})
  }
  
  render(){
    console.log(this.props.id)
    return (
      this.state.allowEdit ? 
        (
          <WomanProfileContainer>
            {/* <ProfileImage src={this.props.profileImage}/> */}
            <StyledLabel>Profile Picture: </StyledLabel>
            <StyledInput name="img" defaultValue={this.props.profileImage} onChange={this.handleChange}/>

            <StyledLabel>Name: </StyledLabel>
            <StyledInput name="name" defaultValue={this.props.name} onChange={this.handleChange}/>

            <StyledLabel>Cost: </StyledLabel>
            <StyledInput name="cost" defaultValue={this.props.cost} onChange={this.handleChange}/>

            <StyledLabel>Description: </StyledLabel>
            <StyledInput name="description" defaultValue={this.props.description} onChange={this.handleChange} style={{height: 100 + "px", width: 400 + "px"}}/>
            <ButtonContainer>
              <Button id={this.props.id} onClick={e => this.save(e)}>Save</Button>
            </ButtonContainer>
          </WomanProfileContainer>
        ) 
        :
        (
          <WomanProfileContainer>
            <ProfileImage src={this.props.profileImage}/>
            <Name>{this.props.name}</Name>
            <Cost>$ {this.props.cost}</Cost>
            <Description>{this.props.description}</Description>
            <ButtonContainer>
              <Button id={this.props.id} onClick={e => this.edit(e)}>Edit</Button>
              <Button id={this.props.id} onClick={e => this.props.delete(e)}>Delete</Button>
            </ButtonContainer>
          </WomanProfileContainer>
        )
    )
  }
}

export default WomanProfile;