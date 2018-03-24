'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function CarrierController() {
    _classCallCheck(this, CarrierController);
  }

  _createClass(CarrierController, [{
    key: 'create',
    value: function create(req, res, next) {}
  }, {
    key: 'lookup',
    value: function lookup(req, res, next) {}
  }, {
    key: 'delete',
    value: function _delete(req, res, next) {}
  }, {
    key: 'update',
    value: function update(req, res, next) {}
  }]);

  return CarrierController;
}();
//# sourceMappingURL=company.controller.js.map