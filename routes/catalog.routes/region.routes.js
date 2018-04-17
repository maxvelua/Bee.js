const router = require('express-promise-router')();

const regionController = require('../../controllers/catalog.controllers/region.controller');

router.get('/region', regionController.get);
router.put('/region', regionController.update);
router.post('/region', regionController.create);

module.exports = router;