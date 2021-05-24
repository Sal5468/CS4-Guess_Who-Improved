
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var AI = require('./AI');
var boardInfo = require('./BoardInfo');


let playercharchosen = ""//delete this
let aiplayerchosen = ""//delete this

let Client = [];
let newClientId = 0;

router.get("/",function(req,res){
	res.sendFile(__dirname + "/public/views/index.html");
	//Clint[] = new Ai.js
});
router.get("/playvsai",function(req,res){
  res.sendFile(__dirname + "/public/views/vsai.html");
});
router.get("/HTP",function(req,res){
  res.sendFile(__dirname + "/public/views/HTP.html");
});
router.get("/win",function(req,res){
  res.sendFile(__dirname + "/public/views/win.html");
});
router.get("/lose",function(req,res){
  res.sendFile(__dirname + "/public/views/lose.html");
});
router.get("/encyclopedia",function(req,res){
  res.sendFile(__dirname + "/public/views/encyclo.html");
});
////////////////////////////////////////////////////////////////////////////////

router.post('/init', function(req, res)
{//needs the AI to pick a chacter to work off of.
	Client[newClientId] = new AI;
	Client[newClientId].setCharacter()
	Client[newClientId].generateAIBoard()
	//aiplayerchosen = Client[req.query.id].getCharacter()
//	console.log(aiplayerchosen)
	res.json({id: newClientId});
//	console.log(Client[newClientId].getCharacter());
	newClientId++;
//	console.log(Client);
});
router.get("/askaiaquestion",function(req,res)
{
	numberClicked = req.query.num
	var returnbool = boardInfo.getCharAnswers(Client[req.query.id].getCharacter(),numberClicked)
	res.json({return:returnbool})
});
router.post("/sendplayerresponse",function(req,res)
{//this was causeing the whole ai board to go null
	//console.log(typeof req.query.answer);
	Client[req.body.id].EliminateAIBoard(Client[req.body.id].getCurrentQ(), req.body.answer, Client[req.body.id].getGuessName())
	res.json(null);
});

router.get("/getaiquestion",function(req,res)
{
	let response = Client[req.query.id].ReturnResponse();//will only return one propper response before returning null
//	console.log(response)
	if(typeof response == typeof "hi" ){
		res.json({num: 13, text: boardInfo.getQuestiontext(response)})
	}
	else{
	//	console.log(boardInfo.getQuestiontext(response))//because of that there is an undefined text here
		res.json({num: response, text: boardInfo.getQuestiontext(response)})
	}
});
router.get("/makeaguess",function(req,res)
{
	let result = false
	if(req.query.name == Client[req.query.id].getCharacter())
	{
		result=true
		//console.log("You win")
	}
	else
	{
		result=false
	//	console.log("You lose")
	}
	res.json({winlose : result});
});
/*router.get("/aimakeaguess",function(req,res)
{
	let result = false
	if(req.query.name == playercharchosen)
	{
		result=true
	//	console.log("AI wins")
	}
	else
	{
		result=false
	//	console.log("AI loses")
	}
	res.json({winlose : result});
});*/

module.exports = router;
