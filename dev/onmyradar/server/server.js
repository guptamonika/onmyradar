var express = require("express");
var path = require("path");
var morgan = require('morgan') // logger

var app = express();
app.use("/radar/:id", function(req, res) {
    res.sendFile(path.join(__dirname + '/../app/dist/radar.html'));
});

app.use(express.static(path.join(__dirname,"../app/dist"))); // static files like css etc
/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.use(morgan('combined')); // log
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
