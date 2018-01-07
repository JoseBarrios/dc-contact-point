'use strict'

const StructuredValueDataController = require('dc-structured-value');
const TYPE = 'ContactPointDataController';

class ContactPointDataController extends StructuredValueDataController {

	static get type(){ return TYPE; }

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

	get areaServed(){ return this.model.areaServed; }
	set areaServed(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.areaServed = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.areaServed = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.areaServed = value }
		else { StructuredValueDataController.logError(this.constructor.name+': areaServed must be a string, object, or array', 'type') }
	}

	get availableLanguage(){ return this.model.availableLanguage; }
	set availableLanguage(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.availableLanguage = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.availableLanguage = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.availableLanguage = value }
		else { StructuredValueDataController.logError(this.constructor.name+': availableLanguage must be a string, object, or array', 'type') }
	}

	get contactOption(){ return this.model.contactOption; }
	set contactOption(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.contactOption = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.contactOption = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.contactOption = value }
		else { StructuredValueDataController.logError(this.constructor.name+': contactOption must be a string, object, or array', 'type') }
	}

	get contactType(){ return this.model.contactType; }
	set contactType(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.contactType = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.contactType = value }
		else { StructuredValueDataController.logError(this.constructor.name+': contactType must be a string, or object', 'type') }
	}

	get email(){ return this.model.email; }
	set email(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){
			let email = this.lodash.toLower(value);
			email = this.lodash.trim(email);
			this.model.email = email;
		} else { StructuredValueDataController.logError(this.constructor.name+': email must be a string, object, or array', 'type') }
	}

	get faxNumber(){ return this.model.faxNumber; }
	set faxNumber(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isNumber(value)){ this.model.faxNumber = value }
		else { StructuredValueDataController.logError(this.constructor.name+': faxNumber must be a number', 'type') }
	}

	get hoursAvailable(){ return this.model.hoursAvailable; }
	set hoursAvailable(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.hoursAvailable = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.hoursAvailable = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.hoursAvailable = value }
		else { StructuredValueDataController.logError(this.constructor.name+': hoursAvailable must be a string, object, or array', 'type') }
	}

	get productSupported(){ return this.model.productSupported; }
	set productSupported(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.productSupported = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.productSupported = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.productSupported = value }
		else { StructuredValueDataController.logError(this.constructor.name+': productSupported must be a string, object, or array', 'type') }
	}

	get telephone(){ return this.model.telephone; }
	set telephone(value){
		if(StructuredValueDataController.isEmpty(value)){}
		else if(StructuredValueDataController.isString(value)){ this.model.telephone = value }
		else if(StructuredValueDataController.isNumber(value)){ this.model.telephone = value }
		else if(StructuredValueDataController.isObject(value)){ this.model.telephone = value }
		else if(StructuredValueDataController.isArray(value)){ this.model.telephone = value }
		else { StructuredValueDataController.logError(this.constructor.name+': telephone must be a string, object, number or array', 'type') }
	}
}

module.exports = ContactPointDataController;
