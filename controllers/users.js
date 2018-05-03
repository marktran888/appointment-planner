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
    // .then(image => Image.populate(image, { path: 'comments.user' }))
    .then(user => res.json(user))
    .catch(next);
}

function appointmentsBookRoute(req, res, next) {
  return User.findById(req.params.id)
    .then(appointment => Object.assign(appointment, req.body))
    .then(appointment => appointment.save())
    .then(appointment => res.json(appointment))
    .catch(next);
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  appointmentsCreate: appointmentsCreateRoute,
  appointmentsBook: appointmentsBookRoute
};
