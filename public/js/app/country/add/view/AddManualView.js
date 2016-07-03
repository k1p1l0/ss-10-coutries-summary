function AddManualView ($container, fn) {
	var table = $('<table></table>');
		button = $('<tr></tr>');

	table.append(template(tpl['addManual'], {}));
	button.append(template(tpl['addManualButton'], {}));

	button.on('click', fn);

	table.append(button);

	$container.append(table);

	return this;
}