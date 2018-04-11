const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// Get input from the console
const stdin = process.stdin;

console.log('Enter the password to hash: ');

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (data) => {
  bcrypt.genSalt(SALT_WORK_FACTOR, (eSalt, salt) => {
    if (eSalt) {
      console.log(eSalt);
      return;
    }

    // hash the password using our new salt
    bcrypt.hash(data, salt, (eHash, hash) => {
      if (eHash) {
        console.log(eHash);
      }

      console.log('Hash: ' + hash);
    });
  });
});
