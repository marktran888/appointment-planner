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
      this.state.business &&
      <main>
        <h1>{this.state.business.businessName}</h1>
        <ul className="columns is-multiline">
          {this.state.business.appointments.map(appointment =>
            <li key={appointment._id} className="column is-full-desktop">
              <div className="card">
                <p>{appointment.date} {appointment.time}</p>
              </div>
            </li>
          )}
        </ul>
      </main>
    );
  }



}


export default CustomerIndexRoute;
