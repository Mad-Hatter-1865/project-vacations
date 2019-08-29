var express = require('express');
var router = express.Router();
var vacationsCtrl = require('../controllers/vacations');

router.get('/',isLoggedIn,vacationsCtrl.index);
router.get('/new',isLoggedIn,vacationsCtrl.new);
router.get('/:id',isLoggedIn,vacationsCtrl.show);
router.post('/',isLoggedIn,vacationsCtrl.create);
router.delete('/:id',isLoggedIn,vacationsCtrl.delete);
router.put('/:id', isLoggedIn,vacationsCtrl.update);
router.get('/:id/edit',isLoggedIn,vacationsCtrl.edit); 

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;