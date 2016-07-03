'use strict';

var BaseModel = ( () => {

	function Model (_param) {
		this.parameters = _param;	

		return this;
	}

	function _getter () {
		return this.parameters;
	}

	function _setter (value) {
		this.parameters = value;
		this.pub(value);
	}

	extend(Observer, Model);

	Model.prototype.set = _setter;
	Model.prototype.get = _getter;

	return Model;
})();

