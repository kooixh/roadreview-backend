/**
 *
 * This file is the controller for the user component. /user
 *
 */
"use strict";

const _ = require('lodash');
const error = require('http-errors');
const carplateService = require('./carplate.service');
const POST_REVIEW_PAYLOAD = ["content", "reviewerIp", "type"];


async function getPlateReview(req, res) {

    try {
        let response = await carplateService.getPlateData(req.params.plateNumber);
        return res.status(200).json({
            status: 'success',
            message: 'found carplate ' + req.params.plateNumber,
            data: response
        });
    } catch (e) {
        return res.status(404).json({
            status: 'success',
            message: 'carplate ' + req.params.plateNumber + ' not found in database',
            data: {}
        });
    }

}

async function postReview(req, res, next) {
    if (!validatePayload(req.body)) {
        console.log("invalid");
        throw next(error(400, 'payload contains invalid values'));
    }

    await carplateService.postReview(req.body, req.params.plateNumber);

    return res.status(201).json({
       status: 'success',
       message: 'review successfully posted for carplate ' + req.params.plateNumber
    });

}

function validatePayload(data) {
    return !(_.isEmpty(data.content) || _.isEmpty(data.type) || _.isEmpty(data.reviewerIp));
}

module.exports = {
    postReview: postReview,
    getPlateReview: getPlateReview
};