'use strict'

const StructuredValue = require('@josebarrios/structured-value');
const EMPTY = '';

class ContactPoint extends StructuredValue {

  constructor(model){
    model = model || {};
    super(model);

    this.areaServed = model.areaServed;
    this.availableLanguage = model.availableLanguage;
    this.contactOption = model.contactOption;
    this.contactType = model.contactType;
    this.email = model.email;
    this.faxNumber = model.faxNumber;
    this.hoursAvailable = model.hoursAvailable;
    this.productSupported = model.productSupported;
    this.telephone= model.telephone;

  }

  get areaServed(){ return this.computed.areaServed; }
  set areaServed(value){
    if(StructuredValue.isEmpty(value)){ this.computed.areaServed = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.areaServed = value }
    else if(StructuredValue.isObject(value)){ this.computed.areaServed = value }
    else if(StructuredValue.isArray(value)){ this.computed.areaServed = value }
    else { StructuredValue.logError(this.constructor.name+': areaServed must be a string, object, or array', 'type') }
  }

  get availableLanguage(){ return this.computed.availableLanguage; }
  set availableLanguage(value){
    if(StructuredValue.isEmpty(value)){ this.computed.availableLanguage = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.availableLanguage = value }
    else if(StructuredValue.isObject(value)){ this.computed.availableLanguage = value }
    else if(StructuredValue.isArray(value)){ this.computed.availableLanguage = value }
    else { StructuredValue.logError(this.constructor.name+': availableLanguage must be a string, object, or array', 'type') }
  }

  get contactOption(){ return this.computed.contactOption; }
  set contactOption(value){
    if(StructuredValue.isEmpty(value)){ this.computed.contactOption = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.contactOption = value }
    else if(StructuredValue.isObject(value)){ this.computed.contactOption = value }
    else if(StructuredValue.isArray(value)){ this.computed.contactOption = value }
    else { StructuredValue.logError(this.constructor.name+': contactOption must be a string, object, or array', 'type') }
  }

  get contactType(){ return this.computed.contactType; }
  set contactType(value){
    if(StructuredValue.isEmpty(value)){ this.computed.contactType = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.contactType = value }
    else if(StructuredValue.isObject(value)){ this.computed.contactType = value }
    else { StructuredValue.logError(this.constructor.name+': contactType must be a string, or object', 'type') }
  }

  get email(){ return this.computed.email; }
  set email(value){
    if(StructuredValue.isEmpty(value)){ this.computed.email = EMPTY}
    else if(StructuredValue.isString(value)){
      let email = this.lodash.toLower(value);
      email = this.lodash.trim(email);
      this.computed.email = email;
    } else { StructuredValue.logError(this.constructor.name+': email must be a string, object, or array', 'type') }
  }

  get faxNumber(){ return this.computed.faxNumber; }
  set faxNumber(value){
    if(StructuredValue.isEmpty(value)){ this.computed.faxNumber = EMPTY}
    else if(StructuredValue.isNumber(value)){ this.computed.faxNumber = value }
    else { StructuredValue.logError(this.constructor.name+': faxNumber must be a number', 'type') }
  }

  get hoursAvailable(){ return this.computed.hoursAvailable; }
  set hoursAvailable(value){
    if(StructuredValue.isEmpty(value)){ this.computed.hoursAvailable = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.hoursAvailable = value }
    else if(StructuredValue.isObject(value)){ this.computed.hoursAvailable = value }
    else if(StructuredValue.isArray(value)){ this.computed.hoursAvailable = value }
    else { StructuredValue.logError(this.constructor.name+': hoursAvailable must be a string, object, or array', 'type') }
  }

  get productSupported(){ return this.computed.productSupported; }
  set productSupported(value){
    if(StructuredValue.isEmpty(value)){ this.computed.productSupported = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.productSupported = value }
    else if(StructuredValue.isObject(value)){ this.computed.productSupported = value }
    else if(StructuredValue.isArray(value)){ this.computed.productSupported = value }
    else { StructuredValue.logError(this.constructor.name+': productSupported must be a string, object, or array', 'type') }
  }

  get telephone(){ return this.computed.telephone; }
  set telephone(value){
    if(StructuredValue.isEmpty(value)){ this.computed.telephone = EMPTY}
    else if(StructuredValue.isString(value)){ this.computed.telephone = value }
    else if(StructuredValue.isNumber(value)){ this.computed.telephone = value }
    else if(StructuredValue.isObject(value)){ this.computed.telephone = value }
    else if(StructuredValue.isArray(value)){ this.computed.telephone = value }
    else { StructuredValue.logError(this.constructor.name+': telephone must be a string, object, number or array', 'type') }
  }
}

module.exports = ContactPoint;
