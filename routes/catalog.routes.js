const router = require('express-promise-router')();

const areaRoute = require('../routes/catalog.routes/area.route');
const iotRoute = require('../routes/catalog.routes/iot.route');
const locationRoute = require('../routes/catalog.routes/location.route');
const numberOfFramesRoute = require('../routes/catalog.routes/numberOfFrames.route');
const regionRoute = require('../routes/catalog.routes/region.routes');
const speciesRoute = require('../routes/catalog.routes/species.route');
const suppliersTypesSuppliersRoute = require('../routes/catalog.routes/suppliersTypesSuppliers.route');
const typeOfBeehiveRoute = require('../routes/catalog.routes/typeOfBeehive.route');
const typeOfFoodRoute = require('../routes/catalog.routes/typeOfFood.route');
const typeOfMedicationRoute = require('../routes/catalog.routes/typeOfMedication.route');

// TODO (DONE) sort routes to files, create 2 level pages routes

router.use(areaRoute);
router.use(iotRoute);
router.use(locationRoute);
router.use(numberOfFramesRoute);
router.use(regionRoute);
router.use(speciesRoute);
router.use(suppliersTypesSuppliersRoute);
router.use(typeOfBeehiveRoute);
router.use(typeOfFoodRoute);
router.use(typeOfMedicationRoute);



module.exports = router;