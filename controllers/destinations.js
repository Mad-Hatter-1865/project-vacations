var Vacation = require('../models/vacation');
 
 module.exports = {
   create
 };

 function create(req, res) {
    Vacation.findById(req.params.id, function(err, vacation) {
      vacation.destinations.push(req.body);
      vacation.save(function(err) {
          console.log(vacation);
        res.redirect(`/vacations/${vacation._id}`);
      });
    });
  }