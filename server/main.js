import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const app = express();
const port = 3000;
const devPort = 8123;

if(process.env.NODE_ENV === 'development'){
	const config = require('../webpack.dev.config');
	let compiler = webpack(config);
	let devServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(devPort, () => {
		console.log('dev server start!');
	});
}

app.use('/', express.static(__dirname + './../dist'));

app.use('/hello', (req, res) => {
	return res.send('hi~');
});

import test from './routes/test';

app.use('/test', test);

const server = app.listen(port, () => {
	console.log('server start!');
});