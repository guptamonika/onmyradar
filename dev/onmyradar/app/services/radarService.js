//fetch = require('fetch');

var RadarService = {
	getRadars: function(cb){
		fetch('/api/radar/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data){
			cb(data);
		});
	},
	addRadar: function(data, cb) {
		fetch('/api/radar/' + data.id, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    name: data.name,
		    description: data.description,
		  })
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			console.log(response);
			cb(response);
		});
	},
	deleteRadar: function(data, cb) {
		console.log('deleteRadar', data);
		fetch('/api/radar/' + data._id, {
		  method: 'DELETE',
		  headers: {
		    'Content-Type': 'application/json'
		  }
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			console.log(response);
			cb(response);
		});
	}
}

module.exports = RadarService