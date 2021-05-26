

var mongoose = require("mongoose");

var Game = mongoose.model("games",{//"info" is name opf collection, required is an attribute of ident
	Multi: Boolean,
	AINum: Number,
  ClientNum: Number,
  AIBoard: Array,
  ClientBoard: Array,
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Game;
