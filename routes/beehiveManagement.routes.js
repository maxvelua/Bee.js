const router = require('express-promise-router')();

const boxController = require('../controllers/beehiveManagement.controllers/box.controller');
const clientController = require('../controllers/beehiveManagement.controllers/client.controller');
const coloniesController = require('../controllers/beehiveManagement.controllers/colonie.controller');
const employeeController = require('../controllers/beehiveManagement.controllers/employee.controller');
const iotController = require('../controllers/beehiveManagement.controllers/iot.controller');
const palletController = require('../controllers/beehiveManagement.controllers/pallet.controller');
const queenController = require('../controllers/beehiveManagement.controllers/queen.controller');
const iotSensors = require('../controllers/beehiveManagement.controllers/iot.controllers/sensors.controller');
const iotArniaScalesSensors = require('../controllers/beehiveManagement.controllers/iot.controllers/arniaScales.controller');
const iotGpsSensors = require('../controllers/beehiveManagement.controllers/iot.controllers/gps.controller');

router.get('/box', boxController.get);
router.get('/client', clientController.get);
router.get('/colonies', coloniesController.get);
router.get('/colonies', employeeController.get);

router.get('/iot/arnia-scales', iotArniaScalesSensors.get);
router.get('/iot/sensors', iotSensors.get);
router.get('/iot/gps', iotGpsSensors.get);

router.get('/pallets', palletController.get);
router.get('/queens', queenController.get);

module.exports = router;






