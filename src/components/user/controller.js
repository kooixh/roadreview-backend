/**
 *
 * This file is the controller for the user component. /user
 *
 */
"use strict";

const _ = require('lodash');
const userSrv = require('./service');



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

    if (!req.params.hasOwnProperty('uid'))
        return next(new Error('missing params'));

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


module.exports = {
    getUser,
};