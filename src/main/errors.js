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

        logger.log('Error: %s %O', err.message, err.stack);
        res.status(500).send({
            'message': 'Internal Server Error'
        });
    });
};

module.exports = handleError;