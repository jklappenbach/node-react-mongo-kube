const config = require('./config.json');
const mongoose = require('mongoose');
const winston = require('winston');



const dbOptions = {
  db: {native_parser: true},
  replset: {
    auto_reconnect:false,
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
mongoose.connection.once('open', () => {
  winston.log('info', 'Connected to the mongo replicaset');
});

module.exports = mongoose.connection;
