import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../images/milo-miloezger-pNArDGC_aNY-unsplash.jpg'

class OurMission extends Component {
  constructor(){
    super()

    this.state = {

    }
  }

  render(){
    return (
      <>
        <OurMissionContainer >
            <MainDisplayText>
              Yesterday, 4,700 Venezuelans were forced to abandon their homes, careers, and families.
            </MainDisplayText>
        </OurMissionContainer>
        <VideoBackground>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/CTbATPcyPqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoBackground>
      </>
    )
  }
}

export default OurMission;

const OurMissionContainer = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items:center;
`
  
const MainDisplayText = styled.h1`
  background-color: rgb(255, 255, 255, 0.75);
  width: 55%;

  border-radius: 100%;
  box-shadow: 0px 0px 100px 50px white;

  color: black;
  font-size: 70px;
  text-align: center;
  text-shadow: 0 0 10px white;  
`

const VideoBackground = styled.section`
  width: 100%;
  height: 95vh;

  display: flex;
  justify-content: center;
  align-items: center;
`