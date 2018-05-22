import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import InputField from './components/InputField';

class App extends React.Component {
  state = {}

  changeInputValue = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  render() {
    return (
      <Fragment>
        <h1>Hello world</h1>
        <InputField for="email" label="Email" type="text" onChange={this.changeInputValue} />
        <InputField for="password" label="Password" type="password" onChange={this.changeInputValue} />
        <Button variant="raised" color="primary">
          Login
        </Button>
      </Fragment>
    );
  }
}

export default App;
