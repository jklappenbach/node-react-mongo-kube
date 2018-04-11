const router = express.Router();
const Company = require('../models/company.model');
const RestfyErrors = require('restify-errors');
const winston = require('winston');

// Get all companies
router.get('/companies', (req, res, next) => {
  Company.find().exec().
    then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      winston.log('error', error);
      next(new RestfyErrors.InternalServerError(error));
    });
});

// Get single item
router.get('/companies/:id', (req, res, next) => {
  const _id = req.params.id;
  Company.findById(_id, (err, data) => {
    if (err) {
      next(new RestfyErrors.InternalServerError(error));
    } else {
      res.status(200).json(data);
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
