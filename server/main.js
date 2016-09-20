import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.set('devPort', (process.env.PORT || 8123));

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
	return res.send('hi~');
});

import test from './routes/test';

app.use('/data', test);

const server = app.listen(app.get('port'), () => {
	console.log('server stared! http://localhost:' + app.get('port'));
});