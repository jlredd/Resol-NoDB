import React, {Component} from 'react';
import styled from 'styled-components';
import WomanProfile from './WomanProfile.js/WomanProfile';


class FundASmallBusiness extends Component {
  constructor(){
    super();
    
    this.state = {

    }
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
          <WomanProfile/>
          <WomanProfile/>
          <WomanProfile/>
          <WomanProfile/>
        </MainDisplay>
      </MainContainer>
    )
  }
}

export default FundASmallBusiness;

const MainContainer = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.section`
width: 30%;

display: flex;
justify-content: space-between;
align-items: center;
`

const Button = styled.button`
  width: 100px;
  height: 35px;
`

const MainDisplay = styled.section`
  width: 100%;
  height: 80vh;
  
  display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: space-around;
`