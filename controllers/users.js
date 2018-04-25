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


module.exports = {
  index: indexRoute,
  show: showRoute
};
