'use strict';

function ChooseController () {
	var param = {
		$container: $('#country-choose'),
		model: new Choose()
	}
	
	med.sub('read', (facadeReply) => {
		param.model.set(facadeReply);
	});

	// Пересоздает, а можно чтобы добавляло в таблицу.
	med.sub('create', () => {
		facade.read('getCountries');
	});

	facade.read('getCountries');

	new ChooseView(param);

	return this;
}