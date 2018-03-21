const router = require('express-promise-router')();
const contoroller = require('../controllers/register.controller');
const registerValidator = require("../validators/users.validator");

router.post('/', registerValidator.regUser, contoroller.regUser);
router.get('/confirm-email', contoroller.confirmEmail);

module.exports = router;