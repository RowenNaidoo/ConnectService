import { seedData } from './seed';
import { cloneDeep } from 'lodash';

let nomineeData = cloneDeep(seedData);
let showConnectionPrompt = true;
let connectionIdSeed = 2;

export const getAllData = () => {
    return nomineeData;
}

export const addNominee = (nominee) => {
    nomineeData.push(nominee);
}

export const getNominees = (qffNo, relationType) => {
    return nomineeData.filter(n => (
        n.qffNo === qffNo && n.relationType === relationType
    ));
}

export const getNomineesByQffNo = (qffNo) => {
    return nomineeData.filter(n => (
        n.qffNo === qffNo
    ));
}

export const connectNominees = (qffNo) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === qffNo) {
            convertAssociationToConnection(n, connectionIdSeed);
        }
        return n;
    });
}

export const disconnectNominees = (qffNo) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === qffNo) {
            delete n.connectionId;
            delete account.qbrMember.points;
            delete account.qbrMember.level;
            delete account.nominee.emailAddress;
            n.links = addConnectLink(qffNo, n.account.nominee.nomineeId);
        }
        return n;
    });
}

export const resetData = () => {
    nomineeData = cloneDeep(seedData);
}

export const connectNominee = (qffNo, nomineeId) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === parseInt(qffNo) && n.account.nominee.nomineeId === parseInt(nomineeId)) {
            convertAssociationToConnection(n, connectionIdSeed);
        }
        return n;
    })
}

export const disconnectNominee = (connectionId) => {
    nomineeData = nomineeData.map(n => {
        if (n.connectionId === parseInt(connectionId)) {
            convertConnectionToAssociation(n);
        }
        return n;
    })
}

export const getConnectionPrompt = () => {
    return showConnectionPrompt;
}

export const setConectionPrompt = (value) => {
    showConnectionPrompt = value;
}

const addConnectLink = (qffNo, nomineeId) => (
    {
        "href": `https://connservice.herokuapp.com/v1/qbrLogin?qffNo=${qffNo}&nomineeId=${nomineeId}`,
        "rel": "connect",
        "method": "GET"
    }
)

const convertConnectionToAssociation = (relation) => {
    relation.relationType = "association";
    delete relation.connectionId;
    delete relation.account.qbrMember.points;
    delete relation.account.qbrMember.level;
    delete relation.account.nominee.emailAddress;
    relation.links = addConnectLink(relation.qffNo, relation.account.nominee.nomineeId);
    return relation;
}

const convertAssociationToConnection = (association, connectionIdSeed) => {
    association.relationType = "connection";
    association.connectionId = connectionIdSeed;
    association.account.qbrMember.points = 1000;
    association.account.qbrMember.level = 1;
    association.account.nominee.emailAddress = `business${connectionIdSeed}@gmail.com`;
    association.links = [
        {
            href: "https://host",
            rel: "navigate",
            method: "GET"
        },
        {
            href: `https://connservice.herokuapp.com/v1/connections/${connectionIdSeed}`,
            rel: "delete",
            method: "DELETE"
        }
    ]
    incrementConnectionIdSeed();
    return association;
}

const incrementConnectionIdSeed = () => {
    connectionIdSeed = connectionIdSeed + 1;
}