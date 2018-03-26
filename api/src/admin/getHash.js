const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// Get input from the console
const stdin = process.stdin, stdout = process.stdout;

console.log('Enter the password to hash: ');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(data) {
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      console.log(err);
      return;
    }

    // hash the password using our new salt
    bcrypt.hash(data, salt, function(err, hash) {
      if (err) {
        console.log(err)
      }

      console.log('Hash: ' + hash);
    });
  });
});
