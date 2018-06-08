import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Private from './Private'; // for testing purposes
import AuthContainer from './AuthContainer';
import PrivateRoute from '../components/PrivateRoute';

// ? Check on the private route I am using. Test it thouroughly

class Main extends Component {
  render() {
    const { updateAuth, isAuth } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={props => <AuthContainer {...props} updateAuth={updateAuth} />} />
        <Route path="/signup" render={props => <AuthContainer {...props} updateAuth={updateAuth} />} />


        <PrivateRoute exact path="/private" component={Private} isAuth={isAuth} />
      </Switch>

    );
  }
}

export default Main;
