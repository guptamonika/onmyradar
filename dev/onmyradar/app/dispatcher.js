let Dispatcher = function() {
	
	var listeners = [];
	
	function register(listener){
		listeners.push(listener);
	}
	
	function dispatch(payload) {
		listeners.forEach(function(listener) {
			listener(payload);
		});
	}	
	
	return {
		register: register,
		dispatch: dispatch
	}
};

module.exports = Dispatcher();