'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _service = require('./service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Declarations
//Dependencies
var app = (0, _express2.default)();
app.disable('etag').disable('x-powered-by');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

//get port
var port = process.env.PORT || 3000;

//get instance of express router
var router = _express2.default.Router();

//register routes
router.get('/getAllData', function (request, response) {
    response.send((0, _service.getAllData)());
});

router.post('/addNominee', function (request, response) {
    (0, _service.addNominee)(request.body);
    response.sendStatus(200);
});

router.post('/disconnectNominees', function (request, response) {
    (0, _service.disconnectNominees)(request.body.qffNo);
    response.send(200);
});

router.post('/resetData', function (request, response) {
    (0, _service.resetData)();
    response.send(200);
});

router.post('/getNominees', function (request, response) {
    response.send((0, _service.getNominees)(request.body.qffNo));
});

router.post('/connectNominees', function (request, response) {
    (0, _service.connectNominees)(request.body.qffNo);
    response.send(200);
});

router.post('/connectNominee', function (request, response) {
    (0, _service.connectNominee)(request.body.qffNo, request.body.nomineeId);
    response.send(200);
});

router.post('/disconnectNominee', function (request, response) {
    (0, _service.disconnectNominee)(request.body.qffNo, request.body.nomineeId);
    response.send(200);
});

router.get('/qbrLogin', function (request, response) {
    response.sendFile(_path2.default.join(__dirname + '/qbrLogin.html'));
});

// all routes will be prefixed with /api
app.use('/api', router);

//start server
app.listen(port);
console.log('Magic happening on port ' + port);