

var mongoose = require("mongoose");

var Room = mongoose.model("rooms",{//"rooms" is name of collection, required is an attribute of ident
  ident: { type: Number, required: true, unique: true },
  ClientID: Number,
  Client2ID: Number,
  ClientBoard: Array,
	Client2Board: Array,
  roomNum: Number
});



module.exports = Room;
