function Mediator () {
	var listeners = [];

	this.trigger = function () {
		listeners.forEach(function (fn) {
			fn();
		});
	};

	this.addEventListener = function (fn) {
		listeners.push(fn);
	};

	return this;
}