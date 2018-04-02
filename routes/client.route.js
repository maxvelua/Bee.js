const router = require('express-promise-router')();
const controller = require('../controllers/client.controller');
const validator = require('../validators/user.validator');

router.post('/' ,validator.regUser, controller.createClient);

module.exports = router;