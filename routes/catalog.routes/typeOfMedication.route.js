const router = require('express-promise-router')();

const typeOfMedicationController = require('../../controllers/catalog.controllers/typeOfMedication.controller');

router.get('/type-of-medication', typeOfMedicationController.get);
router.put('/type-of-medication', typeOfMedicationController.update);
router.post('/type-of-medication', typeOfMedicationController.create);

module.exports = router;