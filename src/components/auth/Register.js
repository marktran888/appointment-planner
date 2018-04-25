import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import Flash from '../../lib/Flash';

class Register extends React.Component {

  state= {
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    // prevent default behaviour
    // make a post request to /api/register
    // send the form data
    e.preventDefault();
    let id ='';
    axios.post('/api/register', this.state) // this.state is the form data, we are storing the form data in state
    //   // the response has the user, token and message. We need to put it in local storage.
      .then(res => {
        Auth.setToken(res.data.token);
        id = res.data.user._id;
      })
      // .then(() => Flash.setMessage('success', 'Thank you for registering!'))
      .then(() => this.props.history.push(`/users/${id}`));
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="forms">
          <div className="field">
            <label htmlFor="username" className="title">Username</label>
            <input className="input"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="title">Email</label>
            <input
              className="input"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="password" className="title">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="passwordConfirmation" className="title">Password Confirmation</label>
            <input
              type="password"
              className="input"
              placeholder="Password Confirmation"
              name="passwordConfirmation"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="userType" className="title">Are you a business or customer?</label>
            <input
              className="input"
              placeholder="Business / Customer"
              name="userType"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn">Submit</button>
        </div>

      </form>
    );
  }
}

export default Register;
