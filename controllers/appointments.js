const Appointment = require('../models/appointment');

// Appointments

function indexRoute(req, res, next) {
  Appointment
    .find()
    .populate('user')
    .then(appointments => {
      res.json(appointments);
    })
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.user = req.currentUser;
  return Appointment.create(req.body)
    .then(appointment => res.status(201).json(appointment))
    .catch(next);
}

function showRoute(req, res, next) {
  return Appointment.findById(req.params.id)
    .then(appointment => res.json(appointment))
    .catch(next);
}

function updateRoute(req, res, next) {
  return Appointment.findById(req.params.id)
    .then(appointment => Object.assign(appointment, req.body))
    .then(appointment => appointment.save())
    .then(appointment => res.json(appointment))
    .catch(next);
}

function deleteRoute(req, res, next) {
  return Appointment.findById(req.params.id)
    .then(appointment => appointment.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
