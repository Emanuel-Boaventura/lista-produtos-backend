const { Router } = require('express');
const router = new Router();

const controller = require('./Controller');

router.get('/', controller.index);

module.exports = router;
