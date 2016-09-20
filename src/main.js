require('./css/base.css');
require('./css/style.css');

global.jQuery = require('jquery');
global.$ = require('jquery');
require('bootstrap');
require('bootstrap-css');

require('./js/board.js');



var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var FILE_PATH = path.join(__dirname, 'data.json');

app.set('port', (process.env.PORT || 3000));


app.get('/api/data', function(req, res) {
  fs.readFile(FILE_PATH, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
