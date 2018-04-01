const router = require('express-promise-router')();
const adminMiddleware = require('../middlewares/adminRoute.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const employeeMiddleware = require('../middlewares/employeeRoute.middleware');

router.get('/admin', authMiddleware, adminMiddleware, (req, res, next) => res.json('Hello admin'));
router.get('/emp', authMiddleware, employeeMiddleware, (req, res, next) => res.json('Hello employee/admin'));
router.get('/client', authMiddleware, (req, res, next) => res.json('Hello employee/admin/client'));

module.exports = router;