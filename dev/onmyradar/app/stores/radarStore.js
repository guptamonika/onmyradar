var Dispatcher = require('../dispatcher.js');

var RadarStore = function() {
	var listeners =[];
	var radars =  [
			{id:"fe", name:"Frontend",description:"All Frontend related things"},
			{id:"js", name:"Javascript",description:"Javascript Sauce"}
		];
	function getRadars() {
		return radars;
		console.log("getRadars");
	}

	function addRadar(data) {
		console.log("addRadar");
		radars.push(data);
		triggerChange();
	}

	function deleteRadar(data) {
		console.log("deleteRadar");
		var index;
		radars.forEach(function(radar, i){
			if(radar.id === data.id) {
				index = i;
			}
		});
		radars.splice(index, 1);
		triggerChange();
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
		onChange:onChange
	}
};
module.exports = RadarStore();