var express = require('express'),
router = express.Router();


controller = require('../controllers');

router.post('/compile', controller.compile);

router.post('/detect', controller.detect);

module.exports = router;