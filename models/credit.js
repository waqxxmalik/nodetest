var mongoose = require("mongoose");
var creditSchema = new mongoose.Schema({
  cardnumber: {type: Number,required: true},
  expiry: {type: Number,  required: true},
  cvv: {type: Number, required: true},
  name: {type: String, required: true}
 
})

module.exports = mongoose.model("Credit", creditSchema);