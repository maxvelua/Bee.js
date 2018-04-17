const router = require('express-promise-router')();

const numberOfFramesController = require('../../controllers/catalog.controllers/numberOfFrames.controller');

router.get('/number-of-frames', numberOfFramesController.get);
router.put('/number-of-frames', numberOfFramesController.update);
router.post('/number-of-frames', numberOfFramesController.create);

module.exports = router;