/**
 *
 *
 * This file exports the functions that performs operations for /carplate
 *
 */
'use strict';
const { Carplate, Review } = require('./carplate.model');
const _ = require('lodash');
const TYPE_UPVOTE = "upvote";
const TYPE_DOWNVOTE = "upvote";

async function createCarplate(plateNumber) {
    let state = getStateByCarplate(plateNumber);
    await Carplate.create({
        plate_number: plateNumber,
        state: state,
        upvotes: 0,
        downvotes: 0
    });
}

async function createReview(data, carplate) {
    let review = await Review.create({
       content: data.content,
       reviewerIp: data.reviewerIp
    });
    review.setCarplate(carplate);
    return review;
}

async function postReview(data, plateNumber) {
    return new Promise(async (resolve, reject) => {
        let carplate = await findCarplateByNumber(plateNumber);
        if (_.isEmpty(carplate)) {
            carplate = createCarplate(plateNumber);
        }
        applyVote(carplate, data);
        await createReview(data, carplate)
    });
}

function applyVote(carplate, data) {
    if (data.type === TYPE_UPVOTE) {
        carplate.upvotes = carplate.upvotes + 1;
    } else if (data.type === TYPE_DOWNVOTE) {
        carplate.downvotes = carplate.downvotes + 1;
    } else {
        throw new Error("type does not contian a valid value");
    }
}

async function findCarplateByNumber(plateNumber) {
    return Carplate.findOne({
        where: {
            plateNumber: plateNumber
        }
    });
}

function getStateByCarplate(plateNumber) {
    return '';
}

module.exports = {
    postReview: postReview
};