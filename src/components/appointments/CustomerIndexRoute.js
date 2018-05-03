// import React from 'react';
// import axios from 'axios';
// import Auth from '../../lib/Auth';
//
// import { Link } from 'react-router-dom';
//
// class CustomerIndexRoute extends React.Component {
//
//   state = {
//     appointments: []
//   };
//
//   componentDidMount() {
//
//     axios.get(`/api/users/${this.props.match.params.id}`, {
//       headers: { Authorization: Auth.getToken() }
//     })
//       .then(res => this.setState({ appointments: res.data.appointments }, () => console.log('state app', this.state.appointments)))
//       .catch(err => console.error('ERROR', err));
//   }
// }
//
//
// export default CustomerIndexRoute;
