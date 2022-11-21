const { Router } = require('express');
const router = new Router();

const controller = require('./controller/productsController');

router.get('/', controller.index);
router.post('/', controller.store);
router.get('/:productId', controller.find);
router.put('/:productId', controller.update);
router.delete('/:productId', controller.delete);

module.exports = router;
