function Facade () {
	return this;
}

Facade.prototype.read = function (url = '', callback = 'undefined') {
	$.get(url, function (data) {

		if (typeof callback === 'function') {
			callback(data);
		} else {
			callback = data;
		}

  		mediator.trigger();
  	});
}