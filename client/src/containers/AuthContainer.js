import React from 'react';
import Signup from '../components/signup/Signup';
import Login from '../components/login/Login';

const AuthContainer = ({
  match, updateAuth, ...props
}) => {
  if (match.url === '/signup') {
    return (
      <Signup updateAuth={updateAuth} {...props} />
    );
  }
  if (match.url === '/login') {
    return (
      <Login updateAuth={updateAuth} {...props} />
    );
  }
  return null;
};

export default AuthContainer;
