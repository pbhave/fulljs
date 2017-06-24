import config from './config';
import express from 'express';
import apiRouter from './api';

var server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	console.info('got the request');
	res.render('index', {
		content: 'Hello from server.js'
	});
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});


