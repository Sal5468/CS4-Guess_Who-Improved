
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var AI = require('./AI');
var boardInfo = require('./BoardInfo');
var passport = require("passport");
var path = require("path");

var User = require("./models/user");
var Game = require("./models/games")
var Room = require("./models/rooms")

let playercharchosen = ""//delete this
let aiplayerchosen = ""//delete this

let AIArray = []


function initAI(){

}
router.get("/",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/index.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/login",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/index.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/signup",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/index.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/signup.html");
	}
});

/*router.get("/menu",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/index.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});*/

router.get("/playvsai",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/vsai.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});
router.get("/joinroom",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/multiRouting.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/HTP",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/HTP.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/win",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/win.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/lose",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/lose.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});

router.get("/encyclopedia",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/encyclo.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});
////////////////////////////////////////////////////////////////////////////////

router.post('/init', function(req, res)
{
	if(req.isAuthenticated())
	{
		User.findOne({ username: req.user.username }, function(err, user)
		{
			if(err)
			{
				res.json(null);
			}
				Game.findOne({ ClientNum: user.ident }, function(err, game)
				{
					if(err)
					{
						console.log("There is an err")
						res.json(null);
					}
					if(game==null)
					{
						console.log("Game branch")
						var obj = new Game({
							AINum: Math.floor(Math.random()*24),
						  AIBoard:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
							ClientNum: user.ident,
						  ClientBoard:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
						})
						var newgame = Game.create(obj,function(error,info){//funtion not called untill this is called
							console.log(info);//using info you need to set the ai up to it
						});
						//you can to a res.json of the obj to the client so you cn change objects there
					}
					else
					{
						console.log("game already exists")
					}
				})
			res.json({ident:user.ident});//maybe del?
		})
	}
	else
	{
		res.json(null);
	}
	//Client[newClientId] = new AI;
	//Client[newClientId].setCharacter()
	//Client[newClientId].generateAIBoard()
	//aiplayerchosen = Client[req.query.id].getCharacter()
//	console.log(aiplayerchosen)
//	res.json({id: newClientId});
//	console.log(Client[newClientId].getCharacter());
//	newClientId++;
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
router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});






router.get("/successroot", function(req, res) {
console.log("get successroot");
	res.json({redirect:"/"});
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
	res.json({redirect:"/login"});
});

router.get("/successsignup", function(req, res) {
console.log("get successsignup");
	res.json({redirect:"/menu"});
});

router.get("/failsignup", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});
});

router.get("/successlogin", function(req, res) {
console.log("get successlogin");
	res.json({redirect:"/menu"});
});
router.get("/faillogin", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});
});

router.get("/getmenu", function(req, res) {
console.log("get menu");
	res.json({redirect:"/menu"});
});
router.get("/getplayvsai", function(req, res) {
console.log("get playvsai");
	res.json({redirect:"/playvsai"});
});
router.get("/getHTP", function(req, res) {
console.log("get HTP");
	res.json({redirect:"/HTP"});
});
router.get("/getMulti", function(req, res) {
console.log("get Multi");
	res.json({redirect:"/joinroom"});
});
router.get("/getencyclopedia", function(req, res) {
console.log("get encyclopedia");
	res.json({redirect:"/encyclopedia"});
});
router.get("/getwin", function(req, res) {
console.log("get win");
	res.json({redirect:"/win"});
});
router.get("/getlose", function(req, res) {
console.log("get lose");
	res.json({redirect:"/lose"});
});


router.get("/menu", function(req, res) {
  console.log("get menu");
  if (req.isAuthenticated()) {
    console.log("sendFile menu.html")
	let thePath = path.resolve(__dirname,"public/views/index.html");
	res.sendFile(thePath);
  } else {
    console.log("sendFile login.html")
  	let thePath = path.resolve(__dirname,"public/views/login.html");
	res.sendFile(thePath);
  }
});

router.get("/userInfo",function(req,res){
  console.log("get userInfo");
     if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
  console.log("valueJY = " + req.user.valueJY);    /* user defined value */
		res.json({username:req.user.username});
	}
	else {
  console.log("req is not Authenticated");
		res.json(null);
	}
});




router.get("/logout", function(req, res) {
  console.log("get logout")
  if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
    req.logout();
    res.redirect("/successroot");
  } else {
  console.log("req is not Authenticated");
    res.redirect("/failroot");
  }
});

router.post("/signup", function(req, res, next) {
console.log("post signup");
console.log("Id number "+newClientId)

  var username = req.body.username;
  var password = req.body.password;
	var ident = newClientId
	newClientId++

  User.findOne({ username: username }, function(err, user) {
console.log("User findOne function callback")
    if (err)
    {
      console.log("err");
      return next(err);
    }
    if (user) {
      console.log("user")
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }
console.log("new User")
    var newUser = new User({
      username: username,
      password: password,
			ident: ident
    });
    newUser.save(next);    //goes to user.js (userSchema.pre(save))
  });


}, passport.authenticate("login", {       //goes to setuppassport.js  (passport.use("login"))
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));



module.exports = router;
