'use strict';

function ChooseView ({$container, model, fn}) {
	$('body').append(this.loader());

	model.sub(() => {
		// NOTE: Memory leak
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
			$body.append(createOneList(tpl['listBody'], country, () => {
				med.pub('click', country);
			}));
		});		

		return $body;
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