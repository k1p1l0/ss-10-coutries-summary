function AddController () {
	var $container = $('#country-add'),
		fn = checkAndAdd;

	function checkAndAdd () {
		let input = {};

		$("input").val((i, val) => {
			if ($('input').eq(i).attr('name') === 'icon') {
				val = '/tmp/No_flag.png';
			}

			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		facade.create('addCountry', input);
	}

	new AddManualView($container, fn);
	// new AddWikiView($container, fn);

	return this;
}