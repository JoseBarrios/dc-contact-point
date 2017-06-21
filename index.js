'use strict'

const Thing = require('@josebarrios/thing');
const Intangible = require('@josebarrios/intangible');
const StructuredValue = require('@josebarrios/structured-value');

const Multiple = require('aggregation/es6');
class ContactPoint extends Multiple(Thing, Intangible,  StructuredValue) {

  constructor(model){
    model = model || {};
    super(model);
  }
}

module.exports = ContactPoint;
