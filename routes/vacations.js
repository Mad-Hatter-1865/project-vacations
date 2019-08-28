var express = require('express');
var router = express.Router();
var vacationsCtrl = require('../controllers/vacations');

router.get('/',vacationsCtrl.index);
router.get('/new',vacationsCtrl.new);
router.get('/:id',vacationsCtrl.show);
router.post('/',vacationsCtrl.create);

module.exports = router;