const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Homepage = new Schema({
  head: String,
  description: String,
  dateUpdate: Number
});

module.exports = mongoose.model("Homepage", Homepage);
