

var mongoose = require("mongoose");

var Room = mongoose.model("rooms",mongoose.Schema({
  ClientID: Number,
  Client2ID: Number,
  ClientBoard: Array,
	Client2Board: Array,
  ClientChar: Number,
  Client2Char: Number,
  roomNum: Number
}));



module.exports = Room;
