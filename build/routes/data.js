'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var FILE_PATH = _path2.default.join(__dirname, '../../data.json');
router.get('/', function (req, res) {
	_fs2.default.readFile(FILE_PATH, function (err, data) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

router.get('/test/:id', function (req, res) {
	res.send(req.params.id);
});

exports.default = router;