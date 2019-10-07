import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import OurMission from './components/OurMission/OurMission';
import FundASmallBusiness from './components/FundASmallBusiness/FundASmallBusiness';
import OurTeam from './components/OurTeam/OurTeam';
import Donors from './components/Donors/Donors';

export default (
  <Switch>
    <Route path='/our-mission' component={OurMission} />
    <Route path='/fund-a-small-business' component={FundASmallBusiness} />
    <Route path='/our-team' component={OurTeam}/>
    <Route path='/donors' component={Donors}/>
    <Redirect exact from="/" to="/our-mission"/>
  </Switch>
)