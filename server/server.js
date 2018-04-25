const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
//
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, console.log('listening on port 3000'));
