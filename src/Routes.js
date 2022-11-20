const { Router } = require('express');
const router = new Router();

const controller = require('./controller/productsController');

router.get('/', controller.index);
router.post('/', controller.store);
router.get('/:productId', controller.find);
router.delete('/:productId', controller.delete);
router.put('/:productId', controller.update);

module.exports = router;
