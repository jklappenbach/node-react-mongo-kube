'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// Get input from the console
var stdin = process.stdin,
    stdout = process.stdout;

console.log('Enter the password to hash: ');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (data) {
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      console.log(err);
      return;
    }

    // hash the password using our new salt
    bcrypt.hash(data, salt, function (err, hash) {
      if (err) {
        console.log(err);
      }

      console.log('Hash: ' + hash);
    });
  });
});
//# sourceMappingURL=getHash.js.map