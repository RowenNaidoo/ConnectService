'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.disconnectNominee = exports.connectNominee = exports.resetData = exports.disconnectNominees = exports.connectNominees = exports.getNominees = exports.addNominee = exports.getAllData = undefined;

var _seed = require('./seed');

var _lodash = require('lodash');

var nomineeData = (0, _lodash.cloneDeep)(_seed.seedData);

var getAllData = exports.getAllData = function getAllData() {
    return nomineeData;
};

var addNominee = exports.addNominee = function addNominee(nominee) {
    nomineeData.push(nominee);
};

var getNominees = exports.getNominees = function getNominees(qffNo) {
    var x = nomineeData.filter(function (n) {
        return n.qffNo === qffNo;
    });
    console.log(x);
    return x;
};

var connectNominees = exports.connectNominees = function connectNominees(qffNo) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === qffNo) {
            n.isConnected = true;
        }
        return n;
    });
};

var disconnectNominees = exports.disconnectNominees = function disconnectNominees(qffNo) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === qffNo) {
            n.isConnected = false;
        }
        return n;
    });
};

var resetData = exports.resetData = function resetData() {
    nomineeData = (0, _lodash.cloneDeep)(_seed.seedData);
};

var connectNominee = exports.connectNominee = function connectNominee(qffNo, nomineeId) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.isConnected = true;
        }
        return n;
    });
};

var disconnectNominee = exports.disconnectNominee = function disconnectNominee(qffNo, nomineeId) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.isConnected = false;
        }
        return n;
    });
};