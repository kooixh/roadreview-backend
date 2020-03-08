/**
 *
 *
 * This file exports the functions that performs operations for /carplate
 *
 */
'use strict';
const Carplate = require('./carplate.model');


async function createCarplate(data) {
    let state = getStateByCarplate(data.plate_number);
    await Carplate.create({
        plate_number: data.plate_number,
        state: state,
        upvotes: 0,
        downvotes: 0
    });
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