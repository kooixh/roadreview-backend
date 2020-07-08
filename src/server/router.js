'use strict';

const root = require('../api/root/routes');
const carplateRoutes = require('../api/carplate/routes/carplate.routes');


/**
 *
 * This function setup the routes for the app by assigning it all router
 *
 *
 * @param app
 */
function setupRoutes(app) {
    app.use('/', root);
    app.use('/carplate', carplateRoutes);
    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });
}

module.exports = setupRoutes;
