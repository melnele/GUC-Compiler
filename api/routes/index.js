var express = require('express'),
router = express.Router();


controller = require('../controllers');

router.post('/compile', controller.compile);

module.exports = router;