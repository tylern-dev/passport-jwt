import React, { Fragment } from 'react';
import Appbar from './components/appbar/Appbar';
import Main from './containers/Main';
import './App.css';
import Authentication from './API/authentication';

// import InputField from './components/InputField';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  }

  authCheck = new Authentication();

  componentDidMount() {
    // checks if the token is valid to auto log in when user comes to website
    this.loginUser();
  }

  updateAuth = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  loginUser = () => {
    this.authCheck.checkToken()
      .then(() => {
        this.setState({
          isLoggedIn: true,
        });
      })
      .catch(() => {
        this.setState({
          isLoggedIn: false,
        });
      });
  }

  changeInputValue = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  render() {
    return (
      <Fragment>
        <Appbar />

        <Main updateAuth={this.updateAuth} isAuth={this.state.isLoggedIn} />
      </Fragment>
    );
  }
}

export default App;
