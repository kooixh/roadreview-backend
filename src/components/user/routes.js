/**
 *
 * This file set up the routes for /user
 *
 */

'use strict';


const express = require('express');
const router = express.Router();

let ctrl = require('./controller');
router.get('/:uid', ctrl.getUser);
module.exports = router;