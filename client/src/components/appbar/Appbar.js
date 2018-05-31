import React from 'react';
import { Button, AppBar, Toolbar, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,

  },
  button: {
    color: '#fff',
  },
};

const Appbar = props => (
  <AppBar position="static">
    <Toolbar>
      <Button className={props.classes.button}>Login</Button>
    </Toolbar>
  </AppBar>

);

export default withStyles(styles)(Appbar);
