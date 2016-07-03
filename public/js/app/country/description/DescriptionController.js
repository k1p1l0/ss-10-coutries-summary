function DescriptionController () {
	var param = {
		$container: $('#country-desc'),
		model: new Description()
	}

	med.sub('click', (country) => {
		param.model.set(country);
	});

	new DescriptionView(param);

	return this;
}