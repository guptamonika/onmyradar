var Dispatcher = require('../dispatcher.js');
var RadarActions = {
	addRadar : function(data) {
		Dispatcher.dispatch({
			type: 'addRadar',
			data: data
		});
	},
	deleteRadar: function(data) {
		Dispatcher.dispatch({
			type: 'deleteRadar',
			data: data
		});
	}	
};

module.exports = RadarActions;