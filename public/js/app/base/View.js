function View () {
	return this;
}

View.prototype.loader = function RenderLoader() {
	return template(tpl['loader'], {'first':'Soft', 'second':'Serve'});
}

