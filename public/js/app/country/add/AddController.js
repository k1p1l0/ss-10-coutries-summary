function AddController () {
	var $container = $('#country-add'),
		fn = checkAndAdd;

	function checkAndAdd () {
		let input = {};

		$("input").val((i, val) => {
			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		facade.create('addCountry', input);
	}

	new AddManualView($container, fn);

	return this;
}