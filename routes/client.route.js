const router = require('express-promise-router')();
const controller = require('../controllers/register.controller');

router.get('/' , controller.confirmEmail);

module.exports = router;