"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var seedData = exports.seedData = [{
    relationType: "association",
    qffNo: 123456789,
    account: {
        qbrMember: {
            businessName: "Florist Gump"
        },
        nominee: {
            nomineeId: 100,
            firstName: "Forrest",
            lastName: "Gump"
        }
    },
    links: [{
        href: "https://connservice.herokuapp.com/v1/qbrLogin?qffNo=1234567890&nomineeId=100",
        rel: "connect",
        method: "GET"
    }]
}, {
    relationType: "association",
    qffNo: 912345678,
    account: {
        qbrMember: {
            businessName: "My First Business"
        },
        nominee: {
            nomineeId: 101,
            firstName: "First",
            lastName: "Business"
        }
    },
    links: [{
        href: "https://connservice.herokuapp.com/v1/qbrLogin?qffNo=912345678&nomineeId=101",
        rel: "connect",
        method: "GET"
    }]
}, {
    relationType: "connection",
    qffNo: 912345678,
    connectionId: 1,
    account: {
        qbrMember: {
            businessName: "Death Star Canteen",
            points: 10000,
            level: 3
        },
        nominee: {
            nomineeId: 101,
            firstName: "First",
            lastName: "Business",
            emailAddress: "first.business@gmail.com"
        }
    },
    links: [{
        href: "https://host",
        rel: "navigate",
        method: "GET"
    }, {
        href: "https://connservice.herokuapp.com/v1/connections/1",
        rel: "delete",
        method: "DELETE"
    }]
}, {
    relationType: "association",
    qffNo: 1970119853,
    account: {
        qbrMember: {
            businessName: "Humpback Exports"
        },
        nominee: {
            nomineeId: 121211,
            firstName: "Steve",
            lastName: "Presto"
        }
    },
    links: [{
        href: "https://connservice.herokuapp.com/v1/qbrLogin?qffNo=1970119853&nomineeId=121211",
        rel: "connect",
        method: "GET"
    }]
}, {
    relationType: "association",
    qffNo: 1970119853,
    account: {
        qbrMember: {
            businessName: "ABC Corp"
        },
        nominee: {
            nomineeId: 121212,
            firstName: "Jackson",
            lastName: "Dan"
        }
    },
    links: [{
        href: "https://connservice.herokuapp.com/v1/qbrLogin?qffNo=1970119853&nomineeId=121212",
        rel: "connect",
        method: "GET"
    }]
}];