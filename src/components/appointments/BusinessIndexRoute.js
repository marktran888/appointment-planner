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
    customer: ''
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`, {
      headers: { Authorization: Auth.getToken() }
    })
      // .then(res => this.setState({ currentUser: res.data._id }, () => console.log('currentuser', this.state.currentUser)))
      .catch(err => console.error('ERROR', err));
  }


  handleChange = ({ target: { name, value } }) => {
    // const user = User.getUser();
    // destructuring e.target.name
    // const errors = Object.assign({}, this.state.errors, { [name]: '' });
    // clearing the errors
    this.setState({ [name]: value }, () => console.log('this.state in handlechange', this.state));
    // name in [] makes it a variable. Otherwise it would look for 'name' in state.
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `/api/users/${this.props.match.params.id}`,
      headers: { Authorization: `Bearer ${Auth.getToken()}`},
      data: this.state
    })
      // .then(() => this.props.history.push('/info'))
      .then((res) => console.log('res', res.data))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  render() {
    return (
      <main className="new-form">
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
      </main>
    );
  }
}

export default BusinessIndexRoute;
