import React, { Fragment } from 'react';
import withAuthentication from '../../hoc/AuthHOC';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

const Signup = ({ onChange, onClick, signup }) => (
  <Fragment>
    <h1>Signup</h1>
    <Form>
      <Input name="email" type="email" label="email" onChange={onChange} />
      <Input name="password" type="password" label="password" onChange={onChange} />
      <Button label="submit" onClick={signup} />
    </Form>

  </Fragment>
);

export default withAuthentication(Signup);

