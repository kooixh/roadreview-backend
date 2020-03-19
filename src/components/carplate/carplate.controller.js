/**
 *
 * This file is the controller for the user component. /user
 *
 */
"use strict";

const _ = require('lodash');
const carplateService = require('./carplate.service');
const POST_REVIEW_PAYLOAD = ["content", "reviewerIp", "type"];

async function postReview(req, res, next) {
    if (!validatePayload(req.body)) {
        throw new Error("invalid payload received for post Review");
    }
    await carplateService.postReview(req.body, req.params.plateNumber);

    return res.status(201).json({
       status: 'success',
       message: 'review successfully posted for carplate ' + req.body.plateNumber
    });

}

function validatePayload(data) {
    return POST_REVIEW_PAYLOAD.every(item => data.hasOwnProperty(item));
}


module.exports = {
    postReview: postReview
};