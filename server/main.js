import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.set('devPort', (process.env.PORT || 8123));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

if(process.env.NODE_ENV === 'development'){
	const config = require('../webpack.dev.config');
	let compiler = webpack(config);
	let devServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(app.get('devPort'), () => {
		console.log('dev server started! http://localhost:' + app.get('devPort'));
	});
}

app.use('/', express.static(__dirname + './../dist'));

app.use('/hello', (req, res) => {
	res.send('hi~');
});

import data from './routes/data';

app.use('/data', data);

const server = app.listen(app.get('port'), () => {
	console.log('server stared! http://localhost:' + app.get('port'));
});