var express = require('express');
var router = express.Router();
var picturesCtrl = require('../controllers/pictures');

router.post('/vacations/:id/piclinks', picturesCtrl.create);

module.exports = router;