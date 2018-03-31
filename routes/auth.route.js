const router = require('express-promise-router')();
const controller = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', controller.login); //authMiddleware.checkUserType,

// login, pass
// 1. findOne check pass(check hash)
// 2. оддать session token

module.exports = router;