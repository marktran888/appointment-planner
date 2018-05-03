const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'mark',
    email: 'mark@mark.com',
    password: 'password',
    passwordConfirmation: 'password',
    userType: 'business',
    businessName: 'Sir Marxalot',
    appointments: [{
      date: '22/04/18',
      time: '13:00 - 14:00'
    }]
  }, {
    username: 'mark2',
    email: 'mark2@mark2.com',
    password: 'password',
    passwordConfirmation: 'password',
    userType: 'customer',
    appointments: []
  }])
    .then(users => console.log(`${users.length} users created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
