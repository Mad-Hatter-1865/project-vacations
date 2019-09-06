const Vacation = require('../models/vacation');

module.exports = {
    index,
    new: newVacation,
    create,
    show,
    delete: deleteVacation,
    update,
    edit
};


function edit(req,res) {
  Vacation.findById(req.params.id, function(err, vacation) {
    res.render('vacations/edit', {vacation});
  });
}

function update(req,res) {
  Vacation.findByIdAndUpdate(req.params.id, req.body,function(err,vacation) {
    res.redirect(`/vacations/${vacation._id}`);
  });
}

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

function deleteVacation(req, res) {
  Vacation.findByIdAndDelete(req.params.id, function(err, vacation){
    if (err) return res.redirect('/vacations');
    res.redirect('/vacations');
  });
}
