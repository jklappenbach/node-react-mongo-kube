'use strict';

var express = require('express');
var router = express.Router();
var Company = require('../models/company.model');

// Get all items
router.get('/companies', function (req, res, next) {
  Company.find().exec().then(function (data) {
    res.statusCode(200).json(data);
  }).catch(function (error) {
    console.log(error);
  });
});

// Get single item
router.get('/companies/:id', function (req, res, next) {
  var _id = req.params.id;
  Company.findById(_id, function (err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

/*
// Add new item
router.post('/carrier', function (req, res, next) {
  req.accepts('application/json');
  var item = {
    name: req.body.name,
    category: req.body.category,
    count: req.body.count
  };

  var data = new Carrier(item);
  data.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data._id);
    }
  });
});

// Delete item
router.delete('/carrier/:id', function (req, res, next) {
  var _id = req.params.id;
  Carrier.findByIdAndRemove(_id, function (err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update item
router.put('/carrier/:id', function (req, res, next) {
  req.accepts('application/json');
  var _id = req.params.id;
  Carrier.findById(_id, function (err, data) {
    if (err) {
      res.status(404).send();
    } else {
      data.name = req.body.name;
      data.category = req.body.category;
      data.count = req.body.count;
      data.save();
      res.status(200).json(data);
    }
  });
});
*/

module.exports = router;
//# sourceMappingURL=carrier.route.js.map