var React = require("react");
var ReactDOM = require("react-dom");
var RadarApp = require('./components/RadarApp.jsx');
var ReactRouter = require('react-router');


var RadarDetails = require("./components/RadarDetails.jsx");
var Home = require("./components/Home.jsx");

var { browserHistory,
	  Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" component={RadarApp}>
			<IndexRoute component={Home}/>
			<Route path="/radar/:radarId" component={RadarDetails}/>
	    </Route>
  	</Router>),
	document.getElementById('container')
);

