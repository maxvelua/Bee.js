const router = require('express-promise-router')();

const typeOfBeehiveController = require('../../controllers/catalog.controllers/typeOfBeehive.controller');

router.get('/type-of-beehive', typeOfBeehiveController.get);
router.put('/type-of-beehive', typeOfBeehiveController.update);
router.post('/type-of-beehive', typeOfBeehiveController.create);

module.exports = router;
