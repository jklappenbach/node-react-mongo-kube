const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4545;
const winston = require('winston');
const logger = require('morgan');
const companyRoutes = require('./routes/company.route');
const db = require('./database');

// Body Parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', companyRoutes);

app.get('/', (req, resp, next) => {
  resp.status(200).json({ code: 'ok' });
})

app.listen(PORT, function() {
  winston.log('info', `Server is listening on port ${PORT}`);
});
