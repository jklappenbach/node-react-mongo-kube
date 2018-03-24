'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 4545;
var winston = require('winston');
var logger = require('morgan');
var companyRoutes = require('./routes/company.route');
var db = require('./database');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  winston.log('info', 'Connected to the mongo replicaset');
});

// Body Parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', companyRoutes);

app.get('/', function (req, resp, next) {
  resp.status(200).json({ code: 'ok' });
});

app.listen(PORT, function () {
  winston.log('info', 'Server is listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map