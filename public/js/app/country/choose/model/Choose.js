'use strict';

var Choose = ( () => {

	function Choose () {
		this.parameters = [];

		return this;
	}

	extend(BaseModel, Choose);

	Choose.prototype.forEach = function (fn) {
		this.parameters.forEach(fn);
	}

	return Choose;
})();