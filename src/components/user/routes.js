/**
 *
 * This file set up the routes for /user
 *
 */

'use strict';


let express = require('express');
let router = express.Router();

let ctrl = require('./controller');
router.get('/:uid', ctrl.getUser);
module.exports = router;