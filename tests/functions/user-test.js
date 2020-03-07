"use strict";
global.mocha = require('mocha');

let expect = require('chai').expect;
let userSrv = require('../../src/components/user/user.service');



describe('getUserByNumberFunctions', function () {

    describe('for input 1', function () {

        it('should return user object', function () {
            expect(userSrv.getUserByNumber("1")).to.be.eql({
               name: 'test',
               id: '1234ABC'
            });
        });
    });

    describe('for input 3', function () {

        it('should return empty object', function () {
            expect(userSrv.getUserByNumber("3")).to.be.eql({});
        });
    });
});
