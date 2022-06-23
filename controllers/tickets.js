const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket,
  };

  function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          res.render('flights/show', {flight, tickets})
        });
    });
  }

  function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets
      });
    })
  }