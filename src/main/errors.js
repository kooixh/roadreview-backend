/**
 *
 * This file exports a function to set up error handler
 *
 */

'use strict';


const logger = require('../utils/logger');


/**
 *
 *
 * This function sets up error hanlding for app
 *
 * @param app
 */
function handleError(app) {

    // error handler
    app.use(function (err, req, res, next) {

        if (!err)
            return next();

        res.status(err.statusCode).send({
            status: 'error',
            message: err.message
        });
    });
}

module.exports = handleError;