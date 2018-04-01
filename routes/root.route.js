const router = require('express-promise-router')();

router.get('/', (req, res, next) => res.json('Hello from bee.js'));

module.exports = router;