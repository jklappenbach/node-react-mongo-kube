'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

function getHash() {

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash('abc123', salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      var value = hash;
      next();
    });
  });
};

module.exports = getHash;
//# sourceMappingURL=getHash.js.map