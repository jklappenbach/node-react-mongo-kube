'use strict';

var config = require('./config.json');
var mongoose = require('mongoose');
var winston = require('winston');

var dbOptions = {
  db: { native_parser: true },
  replset: {
    auto_reconnect: false,
    poolSize: 10,
    socketOptions: {
      keepAlive: 1000,
      connectTimeoutMS: 30000
    }
  },
  server: {
    poolSize: 5,
    socketOptions: {
      keepAlive: 1000,
      connectTimeoutMS: 30000
    }
  }
};

mongoose.connect(config.db, dbOptions);
mongoose.connection.on('error', console.error.bind(console, 'connection error!'));
mongoose.connection.once('open', function () {
  winston.log('info', 'Connected to the mongo replicaset');
});

module.exports = mongoose.connection;
//# sourceMappingURL=database.js.map