

var mongoose = require("mongoose");

var Game = mongoose.model("games",{//"info" is name opf collection, required is an attribute of ident
	ident: { type: Number, required: true, unique: true },
	AINum: Number,//The number of the ai's character
  AIBoard: [Boolean],//the ai's board xed out or not
	currentQ: Number,//the current number of the question asked
	questionsAsked: [Boolean],//an array of the ais perviously asked questions
  ClientBoard:[Boolean],//The clients board xed out or not
	ClientPlayerChoosen:Number,//The number of the clients character

	currentStep: Number,//The number defining state of the game

	characterchosen:Boolean,//if the clients has choosen a character

	currentlyguessing:Boolean,//if the player is guessing or not
	currentlyAsking:Boolean,//This is if the character is up to ask a question
	aiturn:Boolean,//this is if the ai is up to ask a question
	onequestioncap:Boolean,//This caps the question asking at one
	respondedtoaiquestion:Boolean,//This checks to make sure you responded to ai questions
	aiguessingplayerchar:Boolean//This diffecentiates between an ais question and a guess
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Game;
