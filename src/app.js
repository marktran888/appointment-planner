import React from 'react';
import ReactDOM from 'react-dom';


import 'bulma';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import BusinessIndexRoute from './components/appointments/BusinessIndexRoute';
import CustomerIndexRoute from './components/appointments/CustomerIndexRoute';

import Auth from './lib/Auth';
// import User from './lib/User';

// import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            {/* <Route path="/business/users/:id" component={BusinessIndexRoute} /> */}
            <Route path="/customer/users/:id" component={CustomerIndexRoute} />
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
