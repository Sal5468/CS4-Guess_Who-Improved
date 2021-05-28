

var mongoose = require("mongoose");

var Room = mongoose.model("rooms",{//"rooms" is name of collection, required is an attribute of ident

  ClientID: Number,
  Client2ID: Number,
  ClientBoard: Array,
	Client2Board: Array,
  roomNum: Number
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Room;
