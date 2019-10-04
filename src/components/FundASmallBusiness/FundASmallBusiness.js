import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WomanProfile from './WomanProfile.js/WomanProfile';


class FundASmallBusiness extends Component {
  constructor(){
    super();
    
    this.state = {
      women: [],
      allowEdit: false,
      img: '',
      name: '',
      cost: 0,
      description: ''
    }
  }

  add = () => {

  }

  delete = (e) => {
    axios.delete(`http://localhost:4423/api/women/${e.target.id}`)
    .then(res => this.setState({women: res.data}))
    .catch(err => console.log(err))
  }

  save = (e) => {
    console.log('saving')

    const body = {
      id: e.target.id,
      img: this.props.img,
      name: this.props.name,
      cost: this.props.cost,
      description: this.props.description
    }

    console.log(body)

    axios.put(`http://localhost:4423/api/women/${e.target.id}`, body)
    .then(res => this.setState({women: res.data, allowEdit: false}))
    .catch(err => console.log(err))


  }

  handleChange = (e) => {
    console.log(this.state[e.target.name])
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
          <Button>$500</Button>
          <Button>$1000</Button>
          <Button>$1500</Button>
        </ButtonContainer>
        <MainDisplay>
          {this.state.women.map((e, i) => {
              // console.log(e.img)
              // console.log(e.name)
              // console.log(e.cost)
              // console.log(e.description)
              return (<WomanProfile key={e.id} id={e.id} profileImage={e.img} name={e.name} cost={e.cost} description={e.description} delete={this.delete} save={this.save} handleChange={this.handlChange}/>)
            })}
        </MainDisplay>
      </MainContainer>
    )
  }
}

export default FundASmallBusiness;

const MainContainer = styled.section`
  width: 100%;
  // max-height: 100%;
  // height: 90vh;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // align-content: space-around;

  // padding: 20px;
`

const ButtonContainer = styled.section`
width: 30%;

display: flex;
justify-content: space-between;
align-items: center;

margin-top: 20px;
`

const Button = styled.button`
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