function DescriptionView ({$container, model}) {
	model.sub(render);

	function render () {
		$container.html(template(tpl['desc'], model.get()));
	}

	return this;
}