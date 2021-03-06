const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
// const appointments = require('../controllers/appointments');
const auth = require('../controllers/auth');
const users = require('../controllers/users');


// REGISTRATION AND LOGIN requests - uses auth controller to register and find the user in the database
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// APPOINTMENTS
// router.route('/appointments')
//   .get(appointments.index) // display all appointments
//   .post(appointments.create); // sr / business to create new appointment

// router.route('/appointments/:id')
//   .get(appointments.show) // showing specific details of the appointment
//   .put(appointments.update) //sr / to select or deselect an appointment to their schedule
//   .delete(appointments.delete); //sr / business to delete appointments

// USERS
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.appointmentsBook) // customer booking appointments
  .post(secureRoute, users.appointmentsCreate); // business creating new appointments

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
