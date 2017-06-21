'use strict'

var assert = require('assert');
var ContactPoint = require('../index.js');

var model = {};
model.givenName = 'Jose';
model.familyName = 'Barrios'
let contactPoint = new ContactPoint(model);

describe('ContactPoint\n', function() {
  describe('Static Methods:', function() {
    describe('ContactPoint.isNumber', function() {
      it('should ...', function() {
        assert.equal(ContactPoint.isNumber(1), true);
      });
    });
  });
});
