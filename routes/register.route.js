const router = require('express-promise-router')();
const controller = require('../controllers/register.controller');
const controllerAdmin = require('../controllers/admin.controller');

//TODO confirm email don't work
router.get('/confirm-email', controller.confirmEmail);
router.get('/change-email-confirm', controller.changeEmailConfirmation);

module.exports = router;