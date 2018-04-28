const router = require('express-promise-router')();

const locationController = require('../../controllers/catalog.controllers/location.controller');

const locationsController = require('../../controllers/catalog.controllers/location.controllers/locations.controller');
const timeZoneController = require('../../controllers/catalog.controllers/location.controllers/timeZone.controller');
const typeOfLocationController = require('../../controllers/catalog.controllers/location.controllers/typeOfLocations.controller');

router.get('/location', locationController.get);
router.put('/location', locationController.update);
router.post('/location', locationController.create);

router.get('/location/type-of-location', typeOfLocationController.get);
router.put('/location/type-of-location', typeOfLocationController.update);
router.post('/location/type-of-location', typeOfLocationController.create);

router.get('/location/time-zone', timeZoneController.get);

module.exports = router;