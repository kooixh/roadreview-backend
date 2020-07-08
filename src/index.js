/**
 *
 * This file exports function to run the server
 */
'use strict';

const config = require('config');
const app = require('./server/express');
const registerRoutes = require('./server/router');
const setupAuth = require('./server/middlewares/auth');
const logger = require('./server/middlewares/logger');
const cache = require('./common/clients/cache');
const errors = require('./server/errors');
const db = require('./common/clients/database');

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
