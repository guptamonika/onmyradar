var React = require("react");
var ReactDOM = require("react-dom");
var RadarAction = require("../actions/radaractions.js");

module.exports = React.createClass({
	
	deleteRadar: function(e){
		e.preventDefault();
		RadarAction.deleteRadar({
			_id: this.props.radaritem._id
		});
	},
	
	render: function() {
		return (
			<div className="row">{this.props.routeParams.radarId}</div>
		);
	}
})
