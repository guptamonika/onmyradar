var Dispatcher = require('../dispatcher.js');
var RadarService = require ('../services/radarService');

var RadarStore = function() {
	var listeners =[];
	var radars =  [];

	function getRadars() {
		console.log("getRadars");
		return radars;
	}
	
	function populateRadarsFromSource() {
		RadarService.getRadars(function(response){
			console.log(response);
			radars = response;
			triggerChange();
		});
	}

	function addRadar(data) {
		console.log("addRadar");
		//radars.push(data);
		RadarService.addRadar(data,function(response){
			if (response._id) {
				radars.push(response);
				triggerChange();
			}
		});
	}

	function deleteRadar(data) {
		console.log("deleteRadar");
		RadarService.deleteRadar(data,function(response){
			if (response.n === 1) {
				var index;
				radars.forEach(function(radar, i){
					if(radar._id === data._id) {
						index = i;
					}
				});
				radars.splice(index, 1);
				triggerChange();
			}
		});
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function triggerChange() {
		listeners.forEach(function(listener) {
			listener();
		});
	}

	Dispatcher.register(function(payload){
		switch(payload.type) {
			case 'addRadar': 
				addRadar(payload.data);
				break;
			case 'deleteRadar':
				deleteRadar(payload.data);
				break;
		}
	});
	
	return {
		getRadars:getRadars,
		populateRadarsFromSource: populateRadarsFromSource,
		onChange:onChange
	}
};
module.exports = RadarStore();