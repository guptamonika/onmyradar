var React = require("react");
var ReactDOM = require("react-dom");
var RadarListNav = require('./MyRadarList.jsx');

var RadarStore = require('../stores/radarStore.js');

var RadarApp = React.createClass({
	
	getInitialState: function() {
		return {
			radaritems: []
		}
	},
	
	componentWillMount: function() {
		var self = this;
		RadarStore.onChange(function(){
			self.setState({
				radaritems: RadarStore.getRadars()
			})
		});

		RadarStore.populateRadarsFromSource();
	},
	
	render: function() {
		return (
			<div>
				<RadarListNav radaritems={this.state.radaritems}/>
			 	<div className="content">
					{this.props.children}
				</div>
			</div>			
		);		
	}
	
});

module.exports = RadarApp;