import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import { Link } from 'react-router-dom';

class CustomerIndexRoute extends React.Component {

  state = {
    business: null
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`, { //business
      headers: { Authorization: Auth.getToken() }
    })
      .then(res => this.setState({ business: res.data }, () => console.log('business', this.state.business)))
      .catch(err => console.error('ERROR', err));
  }


  render() {
    return (
      <main>

      </main>
    );
  }



}


export default CustomerIndexRoute;
