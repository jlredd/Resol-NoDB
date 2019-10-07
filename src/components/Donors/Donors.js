import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DonorProfile from './DonorProfile/DonorProfile';

class Donors extends Component {
  constructor(){
    super()

    this.state = {
      donors: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4423/api/donors')
    .then(res => this.setState({donors: res.data}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <MainContainer>
        {this.state.donors.map((e, i) => (
        <DonorProfile 
          key={e.id} 
          img={e.img} 
          name={e.name} 
          title={e.title} 
        />))}
      </MainContainer>
    )
  }
}

export default Donors;

const MainContainer = styled.section`
  // background-color: tan;
  width: 100%;
  height: 75vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-around;
`