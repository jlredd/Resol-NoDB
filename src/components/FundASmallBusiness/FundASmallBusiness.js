import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import WomanProfile from './WomanProfile.js/WomanProfile';


class FundASmallBusiness extends Component {
  constructor(){
    super();
    
    this.state = {
      women: []
    }
  }

  add = () => {

  }

  delete = (e) => {
    axios.delete(`http://localhost:4423/api/women/${e.target.id}`)
    .then(res => this.setState({women: res.data}))
    .catch(err => console.log(err))
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
              return (<WomanProfile key={e.id} id={e.id} profileImage={e.img} name={e.name} cost={e.cost} description={e.description} delete={this.delete}/>)
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