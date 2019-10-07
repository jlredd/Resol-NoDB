import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WomanProfile, {StyledInput, StyledLabel, SmallButtonContainer, SmallButton} from './WomanProfile/WomanProfile';
// import {StyledInput} from './WomenProfile.js/WomenProfile';


class FundASmallBusiness extends Component {
  constructor(){
    super();
    
    this.state = {
      women: [],
      filterWomen: [],
      editCheck: [false, 0],
      img: '',
      name: '',
      cost: 0,
      description: '',
      addWindowHidden: 'none',
      filter: false,
      filterToggle: false
    }
  }

  showAdd = () => {
    this.setState({addWindowHidden: 'flex'})
  }

  hideAdd = () => {
    this.setState({addWindowHidden: 'none'})
  }

  add = () => {
    const body = {
      img: this.state.img,
      name: this.state.name,
      cost: this.state.cost,
      description: this.state.description
    }

    axios.post('http://localhost:4423/api/women', body)
    .then(res => this.setState({
      women: res.data, 
      addWindowHidden: 'none',
      img: '',
      name: '',
      cost: 0,
      description: ''
    }))
    .catch(err => console.log(err))
  }

  filter = (e) => {
    this.setState({filter: e.target.name, filterToggle: !this.state.filterToggle})

    if(this.state.filter === e.target.name){
      this.setState({filterToggle: !this.state.filterToggle})
    } else {
      this.setState({filter: e.target.name})
    }
  }

  edit =(e) => {
    this.setState({editCheck: [true, e.target.id]})
  }
  
  delete = (e) => {
    axios.delete(`http://localhost:4423/api/women/${e.target.id}`)
    .then(res => this.setState({women: res.data}))
    .catch(err => console.log(err))
  }
  
  save = (e) => {
    const body = {
      id: e.target.id,
      img: this.state.img,
      name: this.state.name,
      cost: this.state.cost,
      description: this.state.description
    }
    
    this.setState({editCheck: [false, 0]})

    axios.put(`http://localhost:4423/api/women/${e.target.id}`, body)
    .then(res => this.setState({
      women: res.data, 
      allowEdit: false,
      img: '',
      name: '',
      cost: 0,
      description: ''
    }))
    .catch(err => console.log(err))
  }
  
  cancel = () => {
    this.setState({
      editCheck: [false, 0],
      img: '',
      name: '',
      cost: 0,
      description: ''
    })
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  componentDidMount(){
    axios.get('http://localhost:4423/api/women')
    .then(res => this.setState({women: res.data}))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <MainContainer>
        <ButtonContainer>
          <Button onClick={this.showAdd}>Add</Button>
          <Button name='500' onClick={e => this.filter(e)}>$500</Button>
          <Button name='1000' onClick={e => this.filter(e)}>$1000</Button>
          <Button name='1500' onClick={e => this.filter(e)}>$1500</Button>
        </ButtonContainer>
        <MainDisplay>
          <AddWindow display={this.state.addWindowHidden}>
            <StyledLabel>Profile Picture: </StyledLabel>
            <StyledInput name="img" defaultValue={this.state.profileImage} onChange={this.handleChange}/>

            <StyledLabel>Name: </StyledLabel>
            <StyledInput name="name" defaultValue={this.state.name} onChange={this.handleChange}/>

            <StyledLabel>Cost: </StyledLabel>
            <StyledInput name="cost" defaultValue={this.state.cost} onChange={this.handleChange}/>

            <StyledLabel>Description: </StyledLabel>
            <StyledInput name="description" defaultValue={this.state.description} onChange={this.handleChange} style={{height: 100 + "px", width: 400 + "px"}}/>
            <SmallButtonContainer>
              <SmallButton onClick={this.add}>Add</SmallButton>
              <SmallButton onClick={this.hideAdd}>Cancel</SmallButton>
            </SmallButtonContainer>
          </AddWindow>
          {this.state.filterToggle ? (
            this.state.women.map(e => {
              if(e.cost === +this.state.filter){
              return (
              <WomanProfile 
              key={e.id} 
              id={e.id} 
              profileImage={e.img} 
              name={e.name} 
              cost={e.cost} 
              description={e.description}
              edit={this.edit}
              editCheck={this.state.editCheck}
              delete={this.delete} 
              save={this.save} 
              handleChange={this.handleChange}
              />)}})
          ) :
          (
            this.state.women.map((e, i) => {
                return (<WomanProfile 
                  key={e.id} 
                  id={e.id} 
                  profileImage={e.img} 
                  name={e.name} 
                  cost={e.cost} 
                  description={e.description}
                  edit={this.edit}
                  editCheck={this.state.editCheck}
                  cancelFn={this.cancel}
                  delete={this.delete} 
                  save={this.save} 
                  handleChange={this.handleChange}/>)
              })

          )
          }
        </MainDisplay>
      </MainContainer>
    )
  }
}

export default FundASmallBusiness;

const AddWindow = styled.section`
  background-color: rgb(206, 206, 206);
  width: 450px;
  height: 600px;
  
  border: 2px solid rgba(219, 164, 97, 0.274);
  border-radius: 20px;

  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  top: calc(50% - 300px);
  left: calc(50% - 225px);
`

const MainContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ButtonContainer = styled.section`
width: 50%;

display: flex;
justify-content: space-between;
align-items: center;

margin-top: 20px;
`

const Button = styled(SmallButton)`
  width: 200px;
  height: 45px;

  border: none;
  border-radius: 10px;

  font-size: 30px;
`

const MainDisplay = styled.section`
  width: 100%;
  height: 50%;
  
  display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: space-around;
`