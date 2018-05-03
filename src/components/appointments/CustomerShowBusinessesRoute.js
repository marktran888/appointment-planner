import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

// import { Link } from 'react-router-dom';

class CustomerShowBusinessesRoute extends React.Component {

  state = {
    users: null
  };

  componentDidMount() {

    axios.get('/api/users/', {
      headers: { Authorization: Auth.getToken() }
    })
      .then(res => this.setState({ users: res.data }, () => console.log('users', this.state.users)))
      .catch(err => console.error('ERROR', err));
  }


  render() {
    return (
      this.state.users &&
      <main>

        <ul className="columns is-multiline">
          {this.state.users.map(user =>
            <li key={user._id} className="column is-full-desktop">
              <div className="card">
                <p>{user.businessName}</p>
              </div>
            </li>
          )}
        </ul>


      </main>
    );
  }
}



export default CustomerShowBusinessesRoute;
