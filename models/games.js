

var mongoose = require("mongoose");

var Game = mongoose.model("games",{//"info" is name opf collection, required is an attribute of ident
	AINum: Number,//implimented
  AIBoard: [Boolean],//implimented
	ClientNum: Number,//implimented
  ClientBoard:[Boolean],//needs work
	ClientPlayerChoosen:Number,//implimented

	currentStep: Number,//needs work

	characterchosen:Boolean,//implimented

	currentlyguessing:Boolean,//need implimentation
	currentlyAsking:Boolean,//need implimentation
	aiturn:Boolean,//need implimentation
	onequestioncap:Boolean,//need implimentation
	respondedtoaiquestion:Boolean,//need implimentation
	aiguessingplayerchar:Boolean//need implimentation
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Game;
