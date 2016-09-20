'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _test = require('./routes/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(__dirname + './../dist'));

app.use('/hello', function (req, res) {
	return res.send('hi~');
});

app.use('/test', _test2.default);

var server = app.listen(port, function () {
	console.log('server start!');
});