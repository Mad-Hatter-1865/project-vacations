const Vacation = require('../models/vacation');

module.exports = {
    index,
    new: newVacation,
    create,
    show
};

function show(req,res) {
  Vacation.findById(req.params.id, function(err, vacation) {
    res.render('vacations/show', {vacation});
  });
}

function index(req, res) {
  Vacation.find({}, function(err, vacations) {
    res.render('vacations/index',{vacations});
  });
  }

  function newVacation(req, res) {
    res.render('vacations/new');
}

function create(req,res) {
    var vacation = new Vacation(req.body);
  vacation.save(function(err) {
    // one way to handle errors
    if (err) return res.render('vacations/new');
    console.log(vacation);
    res.redirect('/vacations');
  });
}
