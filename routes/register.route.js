const router = require('express-promise-router')();
const contoroller = require('../controllers/register.controller');

router.post('/', contoroller.regUser);
router.get('/confirm-email', contoroller.confirmEmail);

module.exports = router;