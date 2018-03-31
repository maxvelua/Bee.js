const router = require('express-promise-router')();
const adminMiddleware = require('../middlewares/adminRoute.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const employeeMiddleware = require('../middlewares/employeeRoute.middleware');
const controller = require('../controllers/auth.controller');

// TODO commit

router.get('/admin', authMiddleware, adminMiddleware, (req, res, next) => res.json('ok'));
//router.get('/emp', controller.login);
// router.get('/client', controller.login);

module.exports = router;