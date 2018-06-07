import React from 'react';
import Signup from '../components/signup/Signup';
import Login from '../components/login/Login';

const AuthContainer = ({ match, updateAuth }) => {
  if (match.url === '/signup') {
    return (
      <Signup updateAuth={updateAuth} />
    );
  }
  if (match.url === '/login') {
    return (
      <Login updateAuth={updateAuth} />
    );
  }
  return null;
};

export default AuthContainer;
