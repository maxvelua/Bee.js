const router = require('express-promise-router')();
const contoroller = require('../controllers/auth.controller');

router.post('/', contoroller.login);

module.exports = router;