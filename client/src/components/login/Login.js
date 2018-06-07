import React, { Fragment } from 'react';
import withAuthentication from '../../hoc/AuthHOC';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

const Login = (props) => {
  const {
    email, password, onChange, login,
  } = props;
  return (
    <Fragment>
      <h1>Login</h1>
      <Form>
        <Input label="email" type="text" name="email" onChange={onChange} />
        <Input label="password" type="password" name="password" onChange={onChange} />
        <Button onClick={login} label="Submit" />
      </Form>
    </Fragment>
  );
};

export default withAuthentication(Login);
