import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import User from '../../lib/User';

// link specific to react router dom. We use this so we don't have to use an <a> tag (which would reload the page), to link our banger to the show page.
// import { Link } from 'react-router-dom';

class BusinessIndexRoute extends React.Component {

  state = {
    date: '',
    time: '',
    customer: '',
    business: null
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`, { //business
      headers: { Authorization: Auth.getToken() }
    })
      .then(res => this.setState({ business: res.data }, () => console.log('business', this.state.business.appointments)))
      .catch(err => console.error('ERROR', err));
  }


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => console.log('this.state in handlechange', this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `/api/users/${this.props.match.params.id}`,
      headers: { Authorization: `Bearer ${Auth.getToken()}`},
      data: this.state
    })
      .then((res) => this.setState({ business: res.data }))
      // .then(() => this.props.history.push('/info'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  render() {
    return (
      this.state.business &&
      <main>
        <h1>{this.state.business.businessName}</h1>
        <section className="new-form">
          <form className="upload-form" onSubmit={this.handleSubmit}>
            <h1 className="add-appt">Add a new appointment:</h1>
            <div className="field">
              <input
                className="input input-field"
                placeholder="Date"
                value={this.state.date}
                name="date"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <input
                className="input input-field"
                placeholder="Time"
                value={this.state.time}
                name="time"
                onChange={this.handleChange}
              />
            </div>
            <button className="button submit-button">Submit</button>
          </form>

          <ul className="columns is-multiline">
            {this.state.business.appointments.map(appointment =>
              <li key={appointment._id} className="column is-full-desktop">
                <div className="card">
                  <p>{appointment.date} {appointment.time}</p>
                </div>
              </li>
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default BusinessIndexRoute;
