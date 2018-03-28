const router = require('express-promise-router')();
const controller = require('../controllers/register.controller');
const controllerAdmin = require('../controllers/admin.controller');

router.get('/confirm-email', controller.confirmEmail);
router.post('/forgot', controller.forgotPassword);

module.exports = router;