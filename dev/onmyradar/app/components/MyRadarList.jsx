var React = require("react");
var ReactDOM = require("react-dom");
var RadarSummary = require("./RadarSummary.jsx");
var RadarAction = require("../actions/radaractions.js");
var Link = require('react-router').Link;

module.exports = React.createClass({
	addRadar: function(e) {
		e.preventDefault();
		RadarAction.addRadar({
			name: document.getElementById('name').value,
			description: document.getElementById('desc').value
		});
	},
	
	render: function() {
		console.log('this.props', this.props);	
		
		return (
    <div className="navbar navbar-default">
        <div className="container-fluid">
			<ul className='nav navbar-nav'>
				<li className=""><Link to="/" activeClassName="active">Home</Link></li>
				{this.props.radaritems.map(function(radaritem, i){
					return <RadarSummary radaritem={radaritem} key={i}/>;
				})}
			</ul>
			<form className='navbar-form navbar-right' onSubmit={this.addRadar}>
				<button type="submit" className="btn btn-default">Add Radar</button>
				<input type='text' id='name' placeholder='Name'/>
				<input type='text' id='desc' placeholder='Description'/>
			</form>
		</div>
		</div>
		);
	}
})