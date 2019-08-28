var express = require('express');
 var router = express.Router();
 var destinationsCtrl = require('../controllers/destinations');
 
 router.post('/vacations/:id/destinations', destinationsCtrl.create);
 
 module.exports = router;