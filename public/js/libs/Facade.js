'use strict';

var facade = ( () => {
	const ROUTES = {
			'getCountries': {
				uri: '/get',
				channel: 'read'
			},
			'addCountry': {
				uri: '/upload',
				channel: 'create'
			}
		}

	function _create (routeKey = {}, country) {
		let route = ROUTES[routeKey];

		if (DEBUG) {
			data.push(country);
			
			med.pub(route.channel, country);
		} else {
			$.ajax({
			  type: "POST",
			  url: route.uri,
			  data: JSON.stringify(country),
			  success: (info) => {
			  	log(info);
			  	med.pub(route.channel, info);
			  },
			  dataType: 'JSON'
			});
		}
	}

	function _read (routeKey = {}) {
		if (typeof routeKey === 'string') {
			var route = ROUTES[routeKey];
		} else {
			var route = routeKey;
		}

		if (!DEBUG) {
			$.get(route.uri, function (data) {
		  		med.pub(route.channel, data);
		  	});
		} else {
		  	setTimeout(function () {
		  		med.pub(route.channel, data);
		  	}, DEBUG_DELAY)
	  	}
	}


	return {
		create: _create,
		read: _read
	};	
})();