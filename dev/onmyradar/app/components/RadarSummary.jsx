var React = require("react");
var ReactDOM = require("react-dom");
var RadarAction = require("../actions/radaractions.js");

module.exports = React.createClass({
	
	openDetailPage: function(e) {
		location.href = "/radar/" + e.currentTarget.getAttribute('id');
	},
	
	deleteRadar: function(e){
		e.preventDefault();
		RadarAction.deleteRadar({
			id: this.props.radaritem.id
		});
	},
	
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-4">{this.props.radaritem.name}</div>
				<div className="col-xs-5">{this.props.radaritem.description}</div>
				<button className="col-xs-1" onClick={this.deleteRadar}>Delete</button>
			</div>
		);
	}
})