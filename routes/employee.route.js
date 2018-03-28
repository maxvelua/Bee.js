const router = require('express-promise-router')();
const controller = require('../controllers/employee.controller');

router.post('/' , controller.createEmployee);

module.exports = router;