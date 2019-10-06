import React, {Component} from 'react';
import axios from 'axios';
import TeamMember from './TeamMember/TeamMember';

class OurTeam extends Component {
  constructor(){
    super()

    this.state = {
      ourTeam: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4423/api/our-team')
    .then(res => this.setState({ourTeam: res.data}))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        {this.state.ourTeam.map(e => (
        <TeamMember 
          img={e.img}
          name={e.name}
          description={e.description}
        />))}
      </div>
    )
  }
}

export default OurTeam;