import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav  className="nav-bar">
        <Link className="nav-item" to='/our-mission'>Our Mission</Link>
        <Link className="nav-item" to='/fund-a-small-business'>Fund A Small Business</Link>
      </nav>
  )
}

export default NavBar;