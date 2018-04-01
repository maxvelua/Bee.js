const router = require('express-promise-router')();
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');

router.get('/', authMiddleware, userController.getUser);

module.exports = router;