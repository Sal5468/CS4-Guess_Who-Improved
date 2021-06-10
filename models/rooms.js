

var mongoose = require("mongoose");

var Room = mongoose.model("rooms",mongoose.Schema({
  ClientID: Number,
  Client2ID: Number,
  ClientBoard: [Boolean],
	Client2Board: [Boolean],
  ClientChar: Number,
  Client2Char: Number,
  roomNum: Number
}));



module.exports = Room;
