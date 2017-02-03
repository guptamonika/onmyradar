var React = require("react");
var ReactDOM = require("react-dom");
var MyRadarList = require("./components/MyRadarList.jsx");
var url = require('url');
var RadarStore = require('./stores/radarStore.js');
var RadarActions = require('./actions/radaractions.js');

var _radaritems = RadarStore.getRadars();
RadarStore.onChange(function(){
	_radaritems = RadarStore.getRadars();
	render();
});
                
function render(){
    ReactDOM.render(<MyRadarList radaritems={_radaritems} />, document.getElementById("container"));    
}
render();