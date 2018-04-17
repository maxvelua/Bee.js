const router = require('express-promise-router')();

const speciesController = require('../../controllers/catalog.controllers/species.controller');

router.get('/species', speciesController.get);
router.put('/species', speciesController.update);
router.post('/species', speciesController.create);

module.exports = router;