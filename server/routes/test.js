import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('test');
});

router.get('/test/:id', (req, res) => {
	res.send(req.params.id);
});

export default router;