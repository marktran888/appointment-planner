import React from 'react';
import ReactDOM from 'react-dom';


import 'bulma';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Register from './components/auth/Register';
import Login from './components/auth/Login';
import BusinessIndexRoute from './components/businesses/BusinessIndexRoute';
import CustomerIndexRoute from './components/customers/CustomerIndexRoute';
import CustomerShowBusinessesRoute from './components/customers/CustomerShowBusinessesRoute';

import Auth from './lib/Auth';
// import User from './lib/User';

// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/business/users/:id" component={BusinessIndexRoute} />
            <Route path="/customer/users/business/:id" component={CustomerIndexRoute} />
            <Route path="/customer/users/:id" component={CustomerShowBusinessesRoute} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
