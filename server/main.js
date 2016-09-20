import express from 'express';

const app = express();
const port = 3000;

app.use('/', express.static(__dirname + './../dist'));

app.use('/hello', (req, res) => {
	return res.send('hi~');
});

import test from './routes/test';

app.use('/test', test);

const server = app.listen(port, () => {
	console.log('server start!');
});