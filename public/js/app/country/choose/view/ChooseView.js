'use strict';

function ChooseView ({$container, model, fn}) {
	$('body').append(this.loader());

	model.sub(() => {
		// BUG: Утечка памяти. Отвязать нужно.
		$container.html(createList()); 

		$('.loader').hide();
		$('.container').show();
	});

	function createList () {
		return createListBody();
	}

	function createListBody () {
		var $body = $('<ul></ul>');

		model.forEach((country) => {
			$body.append(createOneList(tpl['listBody'], country, addListener));
		});		

		return $body;
	}

	function addListener (event) {
		med.pub('click', country);
	}

	function createOneList (tpl, keys, fn) {
		var $button = $('<li></li>');

		$button.html(template(tpl, keys));

		$button.on('click', fn);

		return $button;
	}

	return this;
}

extend(View, ChooseView);