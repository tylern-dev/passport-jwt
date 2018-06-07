import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import AuthContainer from './AuthContainer';

class Main extends Component {
  render() {
    const { updateAuth } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={props => <AuthContainer {...props} updateAuth={updateAuth} />} />
        <Route path="/signup" render={props => <AuthContainer {...props} updateAuth={updateAuth} />} />
      </Switch>

    );
  }
}

export default Main;
