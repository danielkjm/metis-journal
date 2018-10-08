import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.js';
import AddEntry from './AddEntry.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addEntry" component={AddEntry} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
