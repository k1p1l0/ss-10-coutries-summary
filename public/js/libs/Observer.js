'use strict';

var Observer = ( () => {
	function Observer () {
		this.subscriber = '';
		
		return this;
	}

	Observer.prototype.sub = function subObserver (fn) {
		this.subscriber = fn;
	};

	Observer.prototype.pub = function pubOBserver () {
		this.subscriber();
	};
	
	return Observer;
})();