/***
 * This is root endpoint that can give user information about environment and application version
 */

'use strict';

let express = require('express');
let config = require('config');
let router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({
        'app': config.name,
        'version': config.version,
        'status': 'OK',
        'environment': config.env
    });
});

module.exports = router;