const router = require('express-promise-router')();
const controller = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const authValidator = require('../validators/user.validator');

router.post('/', controller.login); //authMiddleware.checkUserType,
router.post('/forgot', controller.forgotPass);
router.post('/forgot/verify', authValidator.changePassword, controller.resetPass);
// login, pass
// 1. findOne check pass(check hash)
// 2. оддать session token

module.exports = router;