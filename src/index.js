/**
 *
 * This file exports function to run the server
 */
'use strict';

const config = require('config');
const app = require('./main/express');
const registerRoutes = require('./main/router');
const setupAuth = require('./main/auth');
const logger = require('./utils/logger');
const cache = require('./utils/cache');
const errors = require('./main/errors');
const db = require('./utils/database');


/**
 *
 * This function sets up the registerRoutes, setupAuth and start the cache for the server
 *
 */
function setupApp() {
    registerRoutes(app);
    setupAuth(app);
    errors(app);
    cache.init();
    db.authenticate().then(() => {});
}


/**
 *
 *
 * This function starts the server
 *
 *
 * @returns {http.Server}
 */
function startApp() {

    const port = config.PORT || 3000;
    setupApp();

    app.set('port', port);
    return app.listen(port, function () {
        logger.log(`server started on port ${port}`);
    });
}


module.exports = {
    startApp
};