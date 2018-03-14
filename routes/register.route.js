const router = require('express-promise-router')();
const contoroller = require('../controllers/register.controller');

router.post('/', contoroller.regUser);

module.exports = router;