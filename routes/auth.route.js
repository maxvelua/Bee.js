const router = require('express-promise-router')();
const contoroller = require('../controllers/auth.controller');

router.post('/', contoroller.authUser);

module.exports = router;