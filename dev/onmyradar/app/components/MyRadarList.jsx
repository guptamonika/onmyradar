var React = require("react");
var ReactDOM = require("react-dom");
var RadarSummary = require("./RadarSummary.jsx");
var RadarAction = require("../actions/radaractions.js");

module.exports = React.createClass({
	addRadar: function() {
		RadarAction.addRadar({
			name: document.getElementById('name').value,
			description: document.getElementById('desc').value
		});
	},
	
	render: function() {
		console.log('this.props', this.props);	
		
		return (
			<div>
				<div>
					<button onClick={this.addRadar}>Add Radar</button>
					Name: <input type='text' id='name'/>
					Desc: <input type='text' id='desc'/>
				</div>
				{this.props.radaritems.map(function(radaritem, i){
					return <RadarSummary radaritem={radaritem} key={i}/>;
				})}
			</div>
		);
	}
})