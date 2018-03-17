const router = require('express-promise-router')();
const contoroller = require('../controllers/auth.controller');

router.post('/', contoroller.authUser);
router.post('/forgot', contoroller.forgotPass);
router.post('/forgot/verify', contoroller.resetPass);

module.exports = router;