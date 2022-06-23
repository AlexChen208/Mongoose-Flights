const express = require('express');
const router = express.Router();
const testingsCtrl = require('../controllers/testing')

router.get('/', testingsCtrl.new)