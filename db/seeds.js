const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');
const Appointment = require('../models/appointment');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  Appointment.create([{
    date: '02/03/18',
    time: '13:00 - 14:00'
  }])
    .then(appointments => {
      console.log(`${appointments.length} appointments created`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

  User.create([{
    username: 'mark',
    email: 'mark@mark.com',
    password: 'password',
    passwordConfirmation: 'password',
    userType: 'business',
    appointments: []
  }])
    .then(users => console.log(`${users.length} users created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
