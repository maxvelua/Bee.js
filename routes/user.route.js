const router = require('express-promise-router')();
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');
const validator = require('../validators/user.validator');

router.get('/', authMiddleware, userController.getUser);
router.put('/email', authMiddleware, validator.validateChangeEmail, userController.changeEmail); // authMiddleware
router.put('/pass', authMiddleware, validator.changePassword, userController.changePassword); // authMiddleware
router.put('/change-user-data', authMiddleware, userController.changeUserData); // authMiddleware
router.put('/change-client-data', authMiddleware, userController.changeClientData);

module.exports = router;