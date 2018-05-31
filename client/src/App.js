import React, { Fragment } from 'react';
import Appbar from './components/appbar/Appbar';
import './App.css';
// import InputField from './components/InputField';

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
        <Appbar />
        <div>
          <h1>Hello world</h1>
        </div>

      </Fragment>
    );
  }
}

export default App;
