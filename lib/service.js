'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setConectionPrompt = exports.getConnectionPrompt = exports.disconnectNominee = exports.connectNominee = exports.resetData = exports.disconnectNominees = exports.connectNominees = exports.getNomineesByQffNo = exports.getNominees = exports.addNominee = exports.canAddNominee = exports.getAllData = undefined;

var _seed = require('./seed');

var _lodash = require('lodash');

var nomineeData = (0, _lodash.cloneDeep)(_seed.seedData);
var showConnectionPrompt = true;
var connectionIdSeed = 2;

var getAllData = exports.getAllData = function getAllData() {
    return nomineeData;
};

var canAddNominee = exports.canAddNominee = function canAddNominee(nominee) {
    var result = true;

    nomineeData.forEach(function (n) {
        if (n.account.nominee.nomineeId === nominee.account.nominee.nomineeId) {
            result = false;
        }
    });

    return result;
};

var addNominee = exports.addNominee = function addNominee(nominee) {
    nomineeData.push(nominee);
};

var getNominees = exports.getNominees = function getNominees(qffNo, relationType) {
    return nomineeData.filter(function (n) {
        return n.qffNo === qffNo && n.relationType === relationType;
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
            convertAssociationToConnection(n, connectionIdSeed);
        }
        return n;
    });
};

var disconnectNominees = exports.disconnectNominees = function disconnectNominees(qffNo) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === qffNo) {
            delete n.connectionId;
            delete account.qbrMember.points;
            delete account.qbrMember.level;
            delete account.nominee.emailAddress;
            n.links = addConnectLink(qffNo, n.account.nominee.nomineeId);
        }
        return n;
    });
};

var resetData = exports.resetData = function resetData() {
    nomineeData = (0, _lodash.cloneDeep)(_seed.seedData);
};

var connectNominee = exports.connectNominee = function connectNominee(qffNo, nomineeId) {
    nomineeData = nomineeData.map(function (n) {
        if (n.qffNo === parseInt(qffNo) && n.account.nominee.nomineeId === parseInt(nomineeId)) {
            convertAssociationToConnection(n, connectionIdSeed);
        }
        return n;
    });
};

var disconnectNominee = exports.disconnectNominee = function disconnectNominee(connectionId) {
    nomineeData = nomineeData.map(function (n) {
        if (n.connectionId === parseInt(connectionId)) {
            convertConnectionToAssociation(n);
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

var addConnectLink = function addConnectLink(qffNo, nomineeId) {
    return [{
        "href": 'https://connservice.herokuapp.com/v1/qbrLogin?qffNo=' + qffNo + '&nomineeId=' + nomineeId,
        "rel": "connect",
        "method": "GET"
    }];
};

var convertConnectionToAssociation = function convertConnectionToAssociation(relation) {
    relation.relationType = "association";
    delete relation.connectionId;
    delete relation.account.qbrMember.points;
    delete relation.account.qbrMember.level;
    delete relation.account.nominee.emailAddress;
    relation.links = addConnectLink(relation.qffNo, relation.account.nominee.nomineeId);
    return relation;
};

var convertAssociationToConnection = function convertAssociationToConnection(association, connectionIdSeed) {
    association.relationType = "connection";
    association.connectionId = connectionIdSeed;
    if (!association.account.qbrMember.points) {
        association.account.qbrMember.points = 1000;
    }
    if (!association.account.qbrMember.level) {
        association.account.qbrMember.level = 1;
    }
    association.account.nominee.emailAddress = 'business' + connectionIdSeed + '@gmail.com';
    association.links = [{
        href: "https://host",
        rel: "navigate",
        method: "GET"
    }, {
        href: 'https://connservice.herokuapp.com/v1/connections/' + connectionIdSeed,
        rel: "delete",
        method: "DELETE"
    }];
    incrementConnectionIdSeed();
    return association;
};

var incrementConnectionIdSeed = function incrementConnectionIdSeed() {
    connectionIdSeed = connectionIdSeed + 1;
};