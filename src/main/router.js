/**
 *
 * This file exports a function that sets up route to the app
 *
 */

'use strict';

const root = require('../components/root/routes');
const userRoutes = require('../components/user/routes');


/**
 *
 * This function setup the routes for the app by assigning it all router
 *
 *
 * @param app
 */
function setupRoutes(app) {
    app.use('/', root);
    app.use('/user', userRoutes);
    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });
}


module.exports = setupRoutes;
