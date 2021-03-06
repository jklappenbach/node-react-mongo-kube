'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * https://apiv2.fleetmon.com/specs/#!/Vessel_Search/get_vesselsearch_listing#get-fleetextended-detail
 */
var CompanySchema = new Schema({
  ticker: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  closing: [{
    date: Date,
    price: Number
  }]
});

module.exports = mongoose.model('Carrier', CarrierSchema);
//# sourceMappingURL=company.model.js.map