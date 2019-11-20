/**
 *
 *
 * This file exports the functions that performs operations for /user
 *
 */
'use strict';

let users = {

    "1": {
        name: 'test',
        id: '1234ABC'
    },

    "2": {
        name: 'test 2',
        id: '2233ABC'
    }
};


/**
 *
 * Retrive the user by number
 *
 */
function getUserByNumber(number) {

    if (!users.hasOwnProperty(number)) {
        return {};
    }

    return users[number];

}


module.exports = {
    getUserByNumber
};