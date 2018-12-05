import {seedData} from './seed';
import { cloneDeep } from 'lodash';

let nomineeData = cloneDeep(seedData);

export const getAllData = () => {
    return nomineeData;
}

export const addNominee = (nominee) => {
    nomineeData.push(nominee);
}

export const getNominees = (qffNo) => {
    const x = nomineeData.filter(n => (
        n.qffNo === qffNo
    ));
    console.log(x);
    return x;
}

export const connectNominees = (qffNo) => {
    nomineeData = nomineeData.map(n => {
        if(n.qffNo === qffNo) {
            n.isConnected = true;
        }
        return n;
    });
}

export const disconnectNominees = (qffNo) => {
    nomineeData = nomineeData.map(n => {
        if(n.qffNo === qffNo) {
            n.isConnected = false;
        }
        return n;
    });
}

export const resetData = () => {
    nomineeData = cloneDeep(seedData);
}

export const connectNominee = (qffNo, nomineeId) => {
    nomineeData = nomineeData.map(n => {
        if(n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.isConnected = true;
        }
        return n;
    })
}

export const disconnectNominee = (qffNo, nomineeId) => {
    nomineeData = nomineeData.map(n => {
        if(n.qffNo === qffNo && n.nomineeId === nomineeId) {
            n.isConnected = false;
        }
        return n;
    })
}