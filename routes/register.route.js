const router = require('express-promise-router')();
const contoroller = require('../controllers/register.controller');
const registerValidator = require("../validators/users.validator");

router.post('/', //auth, //adminRoute, //registerValidator.regUser
    contoroller.regEmployee);

module.exports = router;