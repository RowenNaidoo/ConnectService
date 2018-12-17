'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setConectionPrompt = exports.getConnectionPrompt = exports.disconnectNominee = exports.connectNominee = exports.resetData = exports.disconnectNominees = exports.connectNominees = exports.getNomineesByQffNo = exports.getNominees = exports.addNominee = exports.getAllData = undefined;

var _seed = require('./seed');

var _lodash = require('lodash');

var nomineeData = (0, _lodash.cloneDeep)(_seed.seedData);
var showConnectionPrompt = true;

var getAllData = exports.getAllData = function getAllData() {
    return nomineeData;
};

var addNominee = exports.addNominee = function addNominee(nominee) {
    nomineeData.push(nominee);
};

var getNominees = exports.getNominees = function getNominees(qffNo, connectionType) {
    return nomineeData.filter(function (n) {
        return n.qffNo === qffNo && n.type === connectionType;
    });
};

var getNomineesByQffNo = exports.getNomineesByQffNo = function getNomineesByQffNo(qffNo) {
    return nomineeData.filter(function (n) {
        return n.qffNo === qffNo;
    });
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

var getConnectionPrompt = exports.getConnectionPrompt = function getConnectionPrompt() {
    return showConnectionPrompt;
};

var setConectionPrompt = exports.setConectionPrompt = function setConectionPrompt(value) {
    showConnectionPrompt = value;
};