let mongoose = require('mongoose');
let Schema = mongoose.Schema;


/**
 * https://apiv2.fleetmon.com/specs/#!/Vessel_Search/get_vesselsearch_listing#get-fleetextended-detail
 */
const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  closingPrices: [{
    date: Date,
    price: Number,
  }],
});

module.exports = mongoose.model('Company', CompanySchema);