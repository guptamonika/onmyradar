var React = require("react");
var ReactDOM = require("react-dom");
var RadarAction = require("../actions/radaractions.js");
var ReactRouter = require('react-router');

var { Link } = ReactRouter;

module.exports = React.createClass({
	
	deleteRadar: function(e){
		e.preventDefault();
		RadarAction.deleteRadar({
			_id: this.props.radaritem._id
		});
	},
	
	render: function() {
		return (
			<li className=""><Link to={"/radar/" + this.props.radaritem._id} activeClassName="active">{this.props.radaritem.name}</Link></li>
		);
	}
})