

var mongoose = require("mongoose");

var Room = mongoose.model("rooms",{//"games" is name of collection, required is an attribute of ident

  ClientID: Number,
  Client2ID: Number,
  ClientBoard: Array,
	Client2Board: Boolean,
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Room;
