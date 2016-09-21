import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

var FILE_PATH = path.join(__dirname, '../../data.json');
router.get('/', (req, res) => {
	fs.readFile(FILE_PATH, (err, data) => {
		if(err){
			console.log(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});


router.get('/test/:id', (req, res) => {
	res.send(req.params.id);
});

export default router;