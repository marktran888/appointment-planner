const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  return User.findById(req.params.id)
    .populate('appointments')
    .then(user => res.json(user))
    .catch(next);
}

function appointmentsCreateRoute(req, res, next) {
  // req.body.user = req.currentUser;
  User
    .findById(req.params.id)
    .then(user => {
      console.log('req body', req.body);
      user.appointments.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function appointmentsBookRoute(req, res, next) {
  User
    .findById(req.body.currentUser.id)
    .then(user => {
      user.appointments.push(req.body.appointment);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  appointmentsCreate: appointmentsCreateRoute,
  appointmentsBook: appointmentsBookRoute
};
