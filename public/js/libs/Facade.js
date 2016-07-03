'use strict';

var facade = ( () => {
	const ROUTES = {
			'getCountries': {
				uri: '/get-list',
				channel: 'read'
			},
			'getTime': {
				uri: '/get-time',
				channel: 'read'
			},
			'addCountry': {
				uri: 'NONE',
				channel: 'create'
			}
		}

	if (DEBUG) {
		var data = [{
		 		'name': 'Ukraine',
		 		'capital': 'Kiev',
		 		'time_zone': {
		 			'normal': 'UTC+2',
		 			'summer': 'UTC+3'
		 		},
		 		'languages': ['RU', 'UA'],
		 		'population': '42,539,010',
		 		'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/135px-Flag_of_Ukraine.svg.png'
		 	}, {
		 		'name': 'USA',
		 		'capital': 'Washington',
		 		'time_zone': {
		 			'normal': 'UTC−4 to −12, +10, +11',
		 			'summer': 'UTC−4 to −10'
		 		},
		 		'languages': ['English'],
		 		'population': '323,625,762',
		 		'icon': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
		 	}];
	}	

	function _create (routeKey = {}, country) {
		let route = ROUTES[routeKey];

		if (DEBUG) {
			data.push(country);
			
			med.pub(route.channel, country);
		}
	}

	function _read (routeKey = {}) {
		let route = ROUTES[routeKey];

		if (!DEBUG) {
			$.get(route.uri, function (data) {
		  		med.pub(route.channel, data);
		  	});
		} else {
		  	setTimeout(function () {
		  		med.pub(route.channel, data);
		  	}, 200)
	  	}
	}


	return {
		create: _create,
		read: _read
	};	
})();