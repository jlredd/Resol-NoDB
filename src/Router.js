import React from 'react';
import {Switch, Route} from 'react-router-dom';
import OurMission from './components/OurMission/OurMission';
import FundASmallBusiness from './components/FundASmallBusiness/FundASmallBusiness';

export default (
  <Switch>
    <Route path='/our-mission' component={OurMission} />
    <Route path='/fund-a-small-business' component={FundASmallBusiness} />
  </Switch>
)