import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';

const Appbar = () => (
  <Fragment>
    <ul>
      <li><NavLink to="/">Logo</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>

    </ul>
  </Fragment>
);

export default Appbar;
