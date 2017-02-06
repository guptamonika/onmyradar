var mongoose = require("mongoose");
var radarSchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("radar", radarSchema);