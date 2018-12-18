import { seedData } from './seed';
import { cloneDeep } from 'lodash';

let nomineeData = cloneDeep(seedData);
let showConnectionPrompt = true;

export const getAllData = () => {
    return nomineeData;
}

export const addNominee = (nominee) => {
    nomineeData.push(nominee);
}

export const getNominees = (qffNo, connectionType) => {
    return nomineeData.filter(n => (
        n.qffNo === qffNo && n.type === connectionType
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
            n.type = "connection";
        }
        return n;
    });
}

export const disconnectNominees = (qffNo) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === qffNo) {
            n.type = "association";
        }
        return n;
    });
}

export const resetData = () => {
    nomineeData = cloneDeep(seedData);
}

export const connectNominee = (qffNo, nomineeId) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.type = "connection";
        }
        return n;
    })
}

export const disconnectNominee = (qffNo, nomineeId) => {
    nomineeData = nomineeData.map(n => {
        if (n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.type = "association";
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