function template (tpl, data) {
	for(var key in data) {
		data[key] = validateInformation(data[key]);
		tpl = tpl.replace(':' + key, data[key]);
	}

	return tpl;
}

function validateInformation (string) {
	if (string <= 0) {
		string = 'No information';
	}

	return string;
}