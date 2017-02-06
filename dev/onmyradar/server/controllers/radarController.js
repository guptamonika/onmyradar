var mongoose = require("mongoose");
var Radar = require("../data/radar");
var _ = require("underscore");

var router = require("express").Router();
router.route("/radar/:id?").get(getRadars).post(addRadar).delete(deleteRadar);

function getRadars(req, res) {
	console.log("getRadars");
    Radar.find(function (err, radars) {
		console.log("find", err, radars);
		
        if (err)
            res.send(err);
        else
            res.json(radars);
    });
}

function addRadar(req, res) {
	console.log("in add0");
	
    var radar = new Radar(_.extend({}, req.body));
	var promise = radar.save();
	console.log("in addradar", radar);
    promise.then(function (doc) {
		console.log("in add", doc);
        if (!doc) {
			console.log("in add");
            res.send(err);
        }

        else
            res.json(doc);
    });
}

function deleteRadar(req, res) {
    var id = req.params.id;
	console.log('deleteRadar', req.params, req.params.id);
	
    Radar.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
