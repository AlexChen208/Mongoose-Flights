var express = require('express');
// const flights = require('../controllers/flights');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')
// All routes start with /flights
// Get new flight page up
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)

module.exports = router;
