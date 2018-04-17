const router = require('express-promise-router')();

const iotController = require('../../controllers/catalog.controllers/iot.controller');
const iotTypeController = require('../../controllers/catalog.controllers/iot.controllers/iotType.controller');

router.get('/iot', iotController.get);
router.put('/iot', iotController.update);
router.post('/iot', iotController.create);

router.get('/iot/iot-type', iotTypeController.get);
router.put('/iot/iot-type', iotTypeController.update);
router.post('/iot/iot-type', iotTypeController.create);

module.exports = router;