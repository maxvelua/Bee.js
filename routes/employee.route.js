const router = require('express-promise-router')();
const controller = require('../controllers/employee.controller');

router.post('/' , controller.createEmployee); // TODO registration for employee and client and comments for all your lines of code

module.exports = router;