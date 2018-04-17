const router = require('express-promise-router')();

const areaController = require('../../controllers/catalog.controllers/area.controller');

router.get('/area', areaController.get);
router.put('/area', areaController.update);
router.post('/area', areaController.create);

module.exports = router;