/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines: 

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './Landing.jsx';
import Basic from './BasicLayout.jsx';
import ServiceHomepage from './ServiceHomepage.jsx';
import CreateForm from './CreateForm.jsx';
import TableView from './Table.jsx';
import Cards from './MyCards.jsx';
import Runs from './Runs.jsx';
import Login from './LoginPage.jsx';
import Logout from './Logout.jsx';
import ProtectedRoute from './ProtectedRoute';

// Class App is the "output" generated on every build,
// it is what you will see on the webpage.
class App extends React.Component {
  
  render() {
    return (
      // When you create a new file or template, add it below
      // as a new 'Route' so you can link to it with a url.

      <div>
          <Switch>
            <ProtectedRoute exact path="/home" component={ServiceHomepage} />
            <ProtectedRoute path="/basic" component={Basic} />
            <ProtectedRoute exact path="/service-home" component={Landing} />
            <ProtectedRoute exact path="/create" component={CreateForm} />
            <ProtectedRoute exact path="/table" component={TableView} />
            <ProtectedRoute exact path="/cards" component={Cards} />
            <ProtectedRoute exact path="/runs/:id" component={Runs} />
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            </Switch>
      </div>
    );
  }
}
export default App;