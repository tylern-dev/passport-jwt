import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';
import Toggle from '../ToggleRPC';

const Appbar = props => (
  <Fragment>

    <ul>
      {props.isLoggedIn ?

        <Fragment>
          <li><NavLink to="/login">Profile</NavLink></li>
          <li><NavLink to="/signup">Dashboard</NavLink></li>
        </Fragment>


    :
        <Fragment>
          <li><NavLink to="/">Logo</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </Fragment>
    }
    </ul>

  </Fragment>

);

export default Appbar;
