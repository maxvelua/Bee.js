const router = require('express-promise-router')();
const contoroller = require('../controllers/auth.controller');
const authValidator = require("../validators/users.validator");

router.post('/', contoroller.authUser);
router.post('/forgot', contoroller.forgotPass);
router.post('/forgot/verify', authValidator.changePassword, contoroller.resetPass);

module.exports = router;