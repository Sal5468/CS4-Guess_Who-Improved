

var mongoose = require("mongoose");

var Game = mongoose.model("games",{//"info" is name opf collection, required is an attribute of ident
	AINum: Number,
  AIBoard: Array,
	ClientNum: Number,
  ClientBoard: Array,
	ClientPlayerChoosen:Number
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Game;
