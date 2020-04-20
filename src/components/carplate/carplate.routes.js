'use strict';

const express = require('express');
const router = express.Router();

let ctrl = require('./carplate.controller');

router.get('/review/:plateNumber', ctrl.getPlateReview);
router.post('/review/:plateNumber', ctrl.postReview);

module.exports = router;