
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var AI = require('./AI');
var boardInfo = require('./BoardInfo');
var passport = require("passport");
var path = require("path");

var User = require("./models/user");

let playercharchosen = ""//delete this
let aiplayerchosen = ""//delete this

let Client = [];
let newClientId = 0;

router.get("/",function(req,res){
	res.sendFile(__dirname + "/public/views/login.html");
});
router.get("/signup",function(req,res){
	res.sendFile(__dirname + "/public/views/signup.html");
});
router.get("/menu",function(req,res){
	res.sendFile(__dirname + "/public/views/index.html");
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

router.get("/menu", function(req, res) {
  console.log("get menu");
  if (req.isAuthenticated()) {
    console.log("sendFile menu.html")
	let thePath = path.resolve(__dirname,"public/views/menu.html");
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

  var username = req.body.username;
  var password = req.body.password;

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
      password: password
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
