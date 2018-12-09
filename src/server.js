//Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { getAllData, addNominee, getNominees, connectNominees, disconnectNominees, resetData, connectNominee, disconnectNominee } from './service';

//Declarations
const app = express();
app.disable('etag').disable('x-powered-by');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get port
const port = process.env.PORT || 3000;

//get instance of express router
const router = express.Router();

//register routes
router.get('/getAllData', (request, response) => {
    response.send(getAllData());
});

router.post('/addNominee', (request, response) => {
    addNominee(request.body);
    response.sendStatus(200);
});

router.post('/getNominees', (request, response) => {
    response.send(getNominees(request.body.qffNo));
});

router.post('/connectNominees', (request, response) => {
    connectNominees(request.body.qffNo);
    response.send(200);
});

router.post('/connectNominee', (request, response) => {
    connectNominee(request.body.qffNo, request.body.nomineeId);
    response.send(200);
});

router.post('/disconnectNominee', (request, response) => {
    disconnectNominee(request.body.qffNo, request.body.nomineeId);
    response.send(200);
});

router.post('/disconnectNominees', (request, response) => {
    disconnectNominees(request.body.qffNo);
    response.send(200);
});

router.post('/resetData', (request, response) => {
    resetData();
    response.send(200);
});

router.get('/qbrLogin', (request, response) => {
    response.sendFile(path.join(__dirname + '/qbrLogin.html'));
});

// all routes will be prefixed with /api
app.use('/api', router);

//start server
app.listen(port);
console.log(`Magic happening on port ${port}`);
