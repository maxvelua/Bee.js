const router = require('express-promise-router')();
const controller = require('../controllers/employee.controller');
const validator = require('../validators/user.validator');

router.post('/', validator.regUser, controller.createEmployee);

module.exports = router;