const router = require('express-promise-router')();
const controller = require('../controllers/client.controller');

router.post('/' , controller.createClient);

module.exports = router;