'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _test = require('./routes/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('port', process.env.PORT || 3000);
app.set('devPort', process.env.PORT || 8123);

if (process.env.NODE_ENV === 'development') {
	var config = require('../webpack.dev.config');
	var compiler = (0, _webpack2.default)(config);
	var devServer = new _webpackDevServer2.default(compiler, config.devServer);
	devServer.listen(app.get('devPort'), function () {
		console.log('dev server started! http://localhost:' + app.get('devPort'));
	});
}

app.use('/', _express2.default.static(__dirname + './../dist'));

app.use('/hello', function (req, res) {
	return res.send('hi~');
});

app.use('/data', _test2.default);

var server = app.listen(app.get('port'), function () {
	console.log('server stared! http://localhost:' + app.get('port'));
});