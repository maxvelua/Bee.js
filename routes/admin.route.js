const router = require('express-promise-router')();
const controller = require('../controllers/admin.controller');
const validator = require('../validators/user.validator');

router.post('/', validator.regUser, controller.createAdmin); // register admin, first create user (login, pass, type of group default: 1), second creater admin (name, surname)
//  function
// 1. create user require (user.services)
// 2. create admin
// TODO create user

module.exports = router;