const router = require('express-promise-router')();
const contoroller = require('../controllers/register.controller');

router.get('/confirm', contoroller.confirmEmail);
router.post('/forgot', contoroller.forgotPassword);

module.exports = router;