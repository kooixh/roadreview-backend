/**
 *
 * This file is the controller for the user component. /carplate
 *
 */
"use strict";

const error = require('http-errors');
const carplateService = require('./carplate.service');
const POST_REVIEW_PAYLOAD = ["content", "reviewerIp", "type"];


async function getPlateReview(req, res) {
    let plateNo = req.params.plateNumber.toUpperCase();
    try {

        let response = await carplateService.getPlateData(plateNo);
        return res.status(200).json({
            status: 'success',
            message: 'found carplate ' + plateNo,
            data: response
        });
    } catch (e) {
        return res.status(404).json({
            status: 'success',
            message: 'carplate ' + plateNo + ' not found in database',
            data: {}
        });
    }

}

async function postReview(req, res, next) {
    if (!validatePayload(req.body)) {
        throw next(error(400, 'payload contains invalid values'));
    }
    let plateNo = req.params.plateNumber.toUpperCase();
    await carplateService.postReview(req.body, plateNo);

    return res.status(201).json({
       status: 'success',
       message: 'review successfully posted for carplate ' + plateNo
    });

}

function validatePayload(data) {
    return POST_REVIEW_PAYLOAD.every(item => data.hasOwnProperty(item));
}

module.exports = {
    postReview: postReview,
    getPlateReview: getPlateReview
};