function AddWikiView ({$container, fn}) {
	var $search = $('<div></div>');

	$search.append(template(tpl['wikiTpl'], {}));

	$search.on('keyup', () => {
		var value = $('#textCol').val();
		
    	facade.read({
    		'uri': 'http://dbpedia.org/data/' + value + '.json',
    		'channel': 'read'
    	});
	});

	$('#country-add').html($search);

	return this;
}