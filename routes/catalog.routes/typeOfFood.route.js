const router = require('express-promise-router')();

const typeOfFoodController = require('../../controllers/catalog.controllers/typeOfFood.controller');

router.get('/type-of-food', typeOfFoodController.get);
router.put('/type-of-food', typeOfFoodController.update);
router.post('/type-of-food', typeOfFoodController.create);

module.exports = router;
