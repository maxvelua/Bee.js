const router = require('express-promise-router')();
const controller = require('../controllers/auth.controller');

router.post('/', controller.login);

// login, pass
// 1. findOne check pass(check hash)
// 2. оддать session token

module.exports = router;