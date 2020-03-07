'use strict';

const express = require('express');
const router = express.Router();

let ctrl = require('./carplate.controller');
router.post('/review/:plateNumber', ctrl.postReview);
module.exports = router;