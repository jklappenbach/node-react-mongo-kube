'use strict';

/**
 * Base population, to be run as part of the deployment business logic
 */
var db = require('../database.js');
var mongoose = require('mongoose');
var Company = require('../models/company.model');

Company.collection.drop();
var companies = [new Company({
  name: 'Microsoft',
  ticker: 'MSFT',
  closingPrices: [{
    date: new Date(),
    price: 33.45
  }]
}), new Company({
  name: 'International Business Machines',
  ticker: 'IBM',
  closingPrices: [{
    date: new Date(),
    price: 25.76
  }]
}), new Company({
  name: 'Google',
  ticker: 'GOOG',
  closingPrices: [{
    date: new Date(),
    price: 1034.22
  }]
})];

var count = 0;
companies.forEach(function (company) {
  company.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      count++;
      if (count == companies.length) quit();
    }
  });
});

function quit() {
  console.log('Added ', companies.length, ' companies for initial population');
  mongoose.disconnect();
}
//# sourceMappingURL=populateDB.js.map