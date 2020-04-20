/**
 *
 *
 * This file exports the functions that performs operations for /carplate
 *
 */
'use strict';
const _ = require('lodash');

const { Carplate, Review } = require('./carplate.model');
const plateState = require('./plate_states');
const TYPE_UPVOTE = "upvote";
const TYPE_DOWNVOTE = "downvote";


async function getPlateData(plateNumber) {
    return new Promise(async (resolve, reject) => {
        let plate = await findCarplateByNumber(plateNumber);

        if (_.isEmpty(plate)) {
            return reject({});
        }

        let reviews = await findReviewsForPlate(plate.id);

        let reviewsResponse = [];

        _.forEach(reviews, elem => {
            let rev = {
                id: elem.id,
                content: elem.content,
                reviewer_ip: elem.reviewer_ip,
                createdAt: elem.createdAt
            };
            reviewsResponse.push(rev);
        });

        let responseData = {
            plate_number: plate.plate_number,
            state: plate.state,
            upvotes: plate.upvotes,
            downvotes: plate.downvotes,
            reviews: reviewsResponse
        };

        return resolve(responseData);
    });
}

async function postReview(data, plateNumber) {
    let carplate = await findCarplateByNumber(plateNumber);
    if (_.isEmpty(carplate)) {
        carplate = await createCarplate(plateNumber);
    }
    applyVote(carplate, data);
    await carplate.save();
    await createReview(data, carplate);
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

async function createCarplate(plateNumber) {
    return new Promise(async resolve => {
        let state = getStateByCarplate(plateNumber);
        let plate = await Carplate.create({
            plate_number: plateNumber,
            state: state,
            upvotes: 0,
            downvotes: 0
        });

        return resolve(plate);
    });


}

async function createReview(data, carplate) {
    let review = await Review.create({
        content: data.content,
        reviewer_ip: data.reviewerIp
    });
    await review.setCarplate(carplate);
    return review;
}

async function findCarplateByNumber(plateNumber) {

    return new Promise(async resolve => {
        let plate = await Carplate.findOne({
            where: {
                plate_number: plateNumber
            }
        });
        return resolve(plate);
    });
}

async function findReviewsForPlate(carplateId) {
    return Review.findAll({
        where: {
            carplateId: carplateId
        }
    });
}

function getStateByCarplate(plateNumber) {
    let state = plateNumber.charAt(0);
    if (plateState.hasOwnProperty(state)) {
        return plateState[state];
    }
    return 'specia';
}

module.exports = {
    postReview: postReview,
    getPlateData: getPlateData
};