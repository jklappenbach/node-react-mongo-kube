const config = require('./config.json');
const mongoose = require('mongoose');


const dbOptions = {
  db: { native_parser: true },
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
      connectTimeoutMS: 5000
    }
  }
};

mongoose.Promise = Promise;
mongoose.connect(config.db, dbOptions);

module.exports = mongoose.connection;
