const router = require('express-promise-router')();

const suppliersTypesSuppliersController = require('../../controllers/catalog.controllers/suppliersTypesSuppliers.controller');
const locationOwnerController = require('../../controllers/catalog.controllers/suppliersTypes.controllers/locationOwner.controller');
const queenBreederController = require('../../controllers/catalog.controllers/suppliersTypes.controllers/queenBreeder.controller');
const equipmentSupplierController = require('../../controllers/catalog.controllers/suppliersTypes.controllers/equipmentSupplier.controller');
const colonySupplierController = require('../../controllers/catalog.controllers/suppliersTypes.controllers/colonySupplier.controller');
const transportationSupplierController = require('../../controllers/catalog.controllers/suppliersTypes.controllers/transportationSupplier.controller');

router.get('/suppliers-types-suppliers', suppliersTypesSuppliersController.get);
router.put('/suppliers-types-suppliers', suppliersTypesSuppliersController.update);
router.post('/suppliers-types-suppliers', suppliersTypesSuppliersController.create);

router.get('/suppliers-types-suppliers/location-owner', locationOwnerController.get);
router.put('/suppliers-types-suppliers/location-owner', locationOwnerController.update);
router.post('/suppliers-types-suppliers/location-owner', locationOwnerController.create);

router.get('/suppliers-types-suppliers/queen-breeder', queenBreederController.get);
router.put('/suppliers-types-suppliers/queen-breeder', queenBreederController.update);
router.post('/suppliers-types-suppliers/queen-breeder', queenBreederController.create);

router.get('/suppliers-types-suppliers/equipment-supplier', equipmentSupplierController.get);
router.put('/suppliers-types-suppliers/equipment-supplier', equipmentSupplierController.update);
router.post('/suppliers-types-suppliers/equipment-supplier', equipmentSupplierController.create);

router.get('/suppliers-types-suppliers/colony-supplier', colonySupplierController.get);
router.put('/suppliers-types-suppliers/colony-supplier', colonySupplierController.update);
router.post('/suppliers-types-suppliers/colony-supplier', colonySupplierController.create);

router.get('/suppliers-types-suppliers/colony-supplier', colonySupplierController.get);
router.put('/suppliers-types-suppliers/colony-supplier', colonySupplierController.update);
router.post('/suppliers-types-suppliers/colony-supplier', colonySupplierController.create);

router.get('/suppliers-types-suppliers/transportation-supplier', transportationSupplierController.get);
router.put('/suppliers-types-suppliers/transportation-supplier', transportationSupplierController.update);
router.post('/suppliers-types-suppliers/transportation-supplier', transportationSupplierController.create);

module.exports = router;