import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import User from '../../lib/User';


import { Link } from 'react-router-dom';

class CustomerIndexRoute extends React.Component {

  state = {
    appointment: '',
    currentUser: '',
    res: '',
    business: null
  };

  componentDidMount() {
    const currentUser = User.getUser();
    axios.get('/api/users')
      .then(res => this.setState({ res: res.data, currentUser: currentUser }, () => console.log('thisstate',this.state)));

    axios.get(`/api/users/${this.props.match.params.id}`, { //business
      headers: { Authorization: Auth.getToken() }
    })
      .then(res => this.setState({ business: res.data }, () => console.log('business', this.state.business)))
      .catch(err => console.error('ERROR', err));
  }

  bookAppointment = (appointment) => {
    console.log('app', appointment);
    this.setState({ appointment: appointment}, () => {
      axios({
        method: 'POST',
        url: `/api/users/${this.props.match.params.id}`,
        data: { appointment: this.state.appointment, currentUser: this.state.currentUser }
      })
        .then(console.log('ok'));
    });
  }


  render() {
    return (
      this.state.business &&
      <main>
        <h1>{this.state.business.businessName}</h1>
        <ul className="columns is-multiline">
          {this.state.business.appointments.map(appointment =>
            <li key={appointment._id} className="column is-full-desktop">
              <div className="card" onClick={() => this.bookAppointment(appointment)}>
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
