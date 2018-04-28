const router = require('express-promise-router')();

const suppliersController = require('../../controllers/catalog.controllers/suppliers.controller');

router.get('/suppliers/:type', suppliersController.get);
router.put('/suppliers/:type', suppliersController.update);
router.post('/suppliers/:type', suppliersController.create);
router.delete('/suppliers/:type', suppliersController.delete);

module.exports = router;