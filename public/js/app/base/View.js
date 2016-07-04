function View () {
	return this;
}

View.prototype.loader = function RenderLoader() {
	let key = {
			'first': 'Soft',
			'second': 'Serve'
		}

	if (DEBUG) {
		key['debug'] = 'DEBUG';
	}

	return template(tpl['loader'], key);
}

