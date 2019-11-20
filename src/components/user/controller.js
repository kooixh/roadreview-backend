/**
 *
 * This file is the controller for the user component. /user
 *
 */
"use strict";


let userSrv = require('./service');
let _ = require('lodash');


/**
 *
 * Function to handle GET /user/uid
 *
 *
 * @param req
 * @param res
 * @param next
 */
function getUser(req, res, next) {

    let user = userSrv.getUserByNumber(req.params.uid);

    if (_.isEmpty(user)) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    return res.status(200).json({
        status: 'success',
        data: user
    });
}

function throwError(req, res, next) {
    throw new Error('Test error');
}

module.exports = {
    getUser,
    throwError
};