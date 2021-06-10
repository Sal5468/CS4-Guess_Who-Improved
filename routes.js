
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var AI = require('./AI');
var boardInfo = require('./BoardInfo');
var passport = require("passport");
var path = require("path");

var User = require("./models/user");
var Game = require("./models/games");
var Room = require("./models/rooms");

let AIArray = []

let currRooms = [];

let newClientId = 0;

function initnewClientId()
{
  if (newClientId == 0)
  {
    User.find({},function(err,user) {
      if (!err) {
        let objs = [];
        for (let i=0;i<user.length;i++) {
          if (newClientId < user[i].ident)
            newClientId = user[i].ident;
        }
      }
    });
  }
	return null
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
	initnewClientId()
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/index.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/signup.html");
	}
});

router.post("/multiplayerupdateArrayPlayerOne",function(req,res)
{
  console.log("update the playerone array")
  if(req.isAuthenticated())
  {
    if(req.body.numtoupdate==0){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.0":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==1){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.1":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==2){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.2":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==3){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.3":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==4){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.4":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==5){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.5":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==6){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.6":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==7){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.7":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==8){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.8":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==9){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.9":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==10){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.10":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==11){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.11":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==12){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.12":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==13){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.13":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==14){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.14":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==15){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.15":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==16){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.16":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==17){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.17":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==18){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.18":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==19){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.19":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==20){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.20":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==21){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.21":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==22){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.22":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==23){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"ClientBoard.23":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
  }
})
router.post("/multiplayerupdateArrayPlayerTwo",function(req,res)
{
  console.log("update the playetwo array")
  if(req.isAuthenticated())
  {
    if(req.body.numtoupdate==0){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.0":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==1){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.1":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==2){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.2":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==3){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.3":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==4){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.4":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==5){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.5":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==6){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.6":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==7){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.7":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==8){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.8":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==9){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.9":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==10){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.10":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==11){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.11":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==12){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.12":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==13){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.13":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==14){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.14":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==15){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.15":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==16){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.16":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==17){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.17":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==18){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.18":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==19){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.19":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==20){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.20":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==21){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.21":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==22){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.22":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
    else if(req.body.numtoupdate==23){
      Room.findOneAndUpdate({roomNum: req.body.ident},{"Client2Board.23":req.body.array},function(err, game)
      {
        if(err)
        {
          console.log("There is an err")
          res.json(null);
        }
        res.json(null);
      })
    }
  }
})

router.post("/multiplayersubmitCharPlayerOne",function(req,res)
{
  console.log("inside submit char for player one")
  if(req.isAuthenticated())
  {
    console.log("authenticated")
    Room.findOneAndUpdate({ roomNum: req.body.ident }, {ClientChar:req.body.num},function(err, room)
    {
      //console.log(room)
      if(err){
        throw err;
      }
      res.json(null)
    })
  }
});
router.post("/multiplayersubmitCharPlayerTwo",function(req,res)//broken need to make two of them
{
  console.log("inside submit char for player two")
  if(req.isAuthenticated())
  {
    console.log("authenticated")
    Room.findOneAndUpdate({ roomNum: req.body.ident }, {Client2Char:req.body.num},function(err, room)
    {
    //  console.log(room)
      if(err){
        throw err;
      }
      res.json(null)
    })
  }
})

router.post("/multiinit",function(req,res)
{
  if(req.isAuthenticated())
  {
    console.log("finding stuff")
    User.findOne({ username: req.user.username }, function(err, user)
    {
      console.log("room of user is " + user.currRoom)
      Room.findOne({ roomNum: user.currRoom }, function(err, room)
      {
        console.log("room is " + room)
        if(user.ident == room.ClientID)
        {
          res.json({secondplayer:false,
                    roomId:room.roomNum,
                    clientID:room.ClientID,
                    charchosen:room.ClientChar,
                    board:room.ClientBoard})
        }
        else if(user.ident == room.Client2ID)
        {
          res.json({secondplayer:true,
                    roomId:room.roomNum,
                    clientID:room.Client2ID,
                    charchosen:room.Client2Char,
                    board:room.Client2Board})
        }
      })
    })
  }
})


router.post("/createRoom",function(req,res){
	if(req.isAuthenticated()){
		Room.findOne({roomNum: req.body.roomNum}, function(err, room){
			//console.log(room)
			if(err){
				throw err;
			}
			else if(room == null){
				//console.log(req.user.ident);
				var newRoom = new Room({
					ClientID: null,//trust me
					Client2ID: null,
					ClientBoard: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
          Client2Board:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
          ClientChar: -1,
					Client2Char: -1,
          roomNum: req.body.roomNum
				})
				Room.create(newRoom, function(err, room){
					if(err){
						console.log(err);
					}
					else if(room){
						console.log("room created");
						res.json({message: true});
					}
					else {
						res.json({message: false});
					}
				})
			}
			else {
				res.json({message:false});
			}
		})
	}
	else{
		res.sendFile(__dirname + "/public/views/signup.html");
	}
});

router.get("/getRoom", function(req,res){
	if(req.isAuthenticated())
  {
		Room.findOne({roomNum: req.query.roomNum}, function(err, room)
    {
      if(room != null)
      {

        if(room.ClientID == req.user.ident || room.Client2ID == req.user.ident){
          console.log("premade room")
          currRooms[req.user.ident] = room.roomNum;
          res.json({redirect: "/multiplayer"})
        }
        else if(room.ClientID == null)
        {
          console.log(req.user.username + " is joining room " + room.roomNum + " as client1");
          Room.findOneAndUpdate({roomNum: req.query.roomNum}, {ClientID: req.user.ident}, function(err, room){
            if(err){console.log(err);}
            User.findOneAndUpdate({ident: req.user.ident}, {currRoom: room.roomNum},function(err, user)
            {
              currRooms[req.user.ident] = room.roomNum;//using this as backup??
              res.json({redirect: "/multiplayer"})
            })
          })
  			}
  			else if(room.Client2ID == null)
        {
          console.log(req.user.username + " is joining room " + room.roomNum + " as client2");
          Room.findOneAndUpdate({roomNum: req.query.roomNum}, {Client2ID: req.user.ident}, function(err, room){
            if(err){console.log(err);}
            User.findOneAndUpdate({ident: req.user.ident}, {currRoom: room.roomNum},function(err, user)
            {
              currRooms[req.user.ident] = room.roomNum;
              res.json({redirect: "/multiplayer"})
            })
          })


			  }
	      else
        {
  				res.json({redirect: false})
  			}
      }
		})
	}
	else
  {
		res.sendFile(__dirname + "/public/views/signup.html");
	}
})



router.get("/initRoom",function(req,res){

	if(req.isAuthenticated()){
		User.findOne({ident: req.user.ident}, function(err, user){
      console.log(currRooms[req.user.ident]);
			if(currRooms[req.user.ident] == null){

			}
			else {
				Room.findOne({roomNum: currRooms[req.user.ident]}, function(err, room){
					//console.log(room)
					if(err)
          {
						console.log(err);
					}
					else if(room != null)
          {
						res.json(room);

					}
				})
			}

		})
	}
	else{
		res.sendFile(__dirname + "/public/views/signup.html");
	}
});

router.get("/getCurrMatches",function(req,res){

	if(req.isAuthenticated()){
		console.log(req.user.username+ " is in multirouting");
		//ADD CODE
		//let retarray = [{player1: req.user.username}];
		//console.log(Room.count());
    console.log("get current matches")
		Room.find({},function(err,room) {
      if (!err) {
        let objs = [];
        //console.log(room);
				//console.log(room[0]);
				res.json({retarray: room})
      }
    });
		//res.json({retarray: retarray})
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});
router.get("/multiplayer",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/multi.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});
router.get("/playvsai",function(req,res){
	if(req.isAuthenticated()){
		res.sendFile(__dirname + "/public/views/vsai.html");
	}
	else{
		res.sendFile(__dirname + "/public/views/login.html");
	}
});
router.get("/multi",function(req,res){
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
	res.json({redirect:"/multi"});
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


router.get("/getUserName",function(req,res){
  console.log("getUserName");
	console.log(req.query.ident);
     if (req.isAuthenticated()) {
			 User.findOne({ident: req.query.ident}, function(err, user){

				 if(err){
					 console.log(err);
				 }
				 else if(user != null){
					 console.log("getUserName " + user.username);
					 res.json({name: user.username});
				 }

			 })
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

  newClientId++
  console.log("Id number "+newClientId)
  var username = req.body.username;
  var password = req.body.password;
	var ident = newClientId
  var currentRoom = -1

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
			ident: ident,
      currRoom : currentRoom
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
//////////////////////////AI Code
router.get('/init', function(req, res)
{
	if(req.isAuthenticated())
	{
		User.findOne({ username: req.user.username }, function(err, user)
		{
			if(err)
			{
				console.log("cant find a user")
				res.json(null);
			}
				Game.findOne({ ident: user.ident }, function(err, game)
				{
					if(err)
					{
						console.log("error finding game")
						res.json(null);
					}
					if(game==null)
					{
						console.log("New Game branch")
						var obj = new Game({
							ident: user.ident,
							AINum: Math.floor(Math.random()*24),
						  AIBoard:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
							questionsAsked:[false,false,false,false,false,false,false,false,false,false,false,false,false],
						  ClientBoard:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
							ClientPlayerChoosen:-1,

							currentStep:0,

							characterchosen:false,
							currentlyguessing:false,
							currentlyAsking:false,
							aiturn:false,
							onequestioncap:false,
							respondedtoaiquestion:false,
							aiguessingplayerchar:false
						})
						var newgame = Game.create(obj,function(error,newgame)
						{//funtion not called untill this is called
							if(error)
							{
								console.log("error creating game")
								res.json(null);
							}
							else
							{
								console.log("new game " + newgame);//using info you need to set the ai up to it
								AIArray[user.ident] = new AI;
								AIArray[user.ident].setCharacter(newgame.AINum)
								AIArray[user.ident].generateAIBoard(newgame.AIBoard)
								AIArray[user.ident].generateQuestionsAsked(newgame.questionsAsked)
								res.json({ident:user.ident,//in init
									ClientBoard:newgame.ClientBoard,//in init
									PlayerChoosen:newgame.ClientPlayerChoosen,//in init
									characterchosen:newgame.characterchosen,// in init
									currentlyguessing:newgame.currentlyguessing,//in init
									currentlyAsking:newgame.currentlyAsking,//in init
									aiturn:newgame.aiturn,//in init
									onequestioncap:newgame.onequestioncap,//in init
									respondedtoaiquestion:newgame.respondedtoaiquestion,//in init
									aiguessingplayerchar:newgame.aiguessingplayerchar,
									currentStep:newgame.currentStep});
							}
						});
					}
					else
					{
						console.log("game already exists")
						Game.findOne({ ident: user.ident }, function(err, premadegame)
						{
              console.log("new game " + premadegame)
							if(err)
							{
								console.log("There is an err")
								res.json(null);
							}
							else
							{
								AIArray[user.ident] = new AI;
								AIArray[user.ident].setCharacter(premadegame.AINum)
								AIArray[user.ident].generateAIBoard(premadegame.AIBoard)
                AIArray[user.ident].generateQuestionsAsked(premadegame.questionsAsked)
								res.json({ident:user.ident,//in init
									ClientBoard:premadegame.ClientBoard,//in init
									PlayerChoosen:premadegame.ClientPlayerChoosen,//in init
									characterchosen:premadegame.characterchosen,// in init
									currentlyguessing:premadegame.currentlyguessing,//in init
									currentlyAsking:premadegame.currentlyAsking,//in init
									aiturn:premadegame.aiturn,//in init
									onequestioncap:premadegame.onequestioncap,//in init
									respondedtoaiquestion:premadegame.respondedtoaiquestion,//in init
									aiguessingplayerchar:premadegame.aiguessingplayerchar,
									currentStep:premadegame.currentStep});//in init
							}
						})
					}
				})
		})
	}
	else
	{
		res.json(null);
	}
});

router.get("/askaiaquestion",function(req,res){
  if(req.isAuthenticated())
	{
  	numberClicked = req.query.num
  	var returnbool = boardInfo.getCharAnswers(AIArray[req.query.id].getCharacter(),numberClicked)
  	res.json({return:returnbool})
  }
  else
  {
    res.json(null)
  }
});
router.post("/sendplayerresponse",function(req,res){
  var returnarray = AIArray[req.body.id].EliminateAIBoard(AIArray[req.body.id].getCurrentQ(), req.body.answer, AIArray[req.body.id].getGuessName(),req.body.id)
  console.log("this is the return array "+returnarray)
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.id},{"AIBoard":returnarray},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
		})
	}
	res.json(null);
});
router.get("/getaiquestion",function(req,res){
  let response = AIArray[req.query.id].ReturnResponse();//will only return one propper response before returning null
  if(typeof response != 'object')
  {
    res.json({num: 13, text: boardInfo.getQuestiontext(response)})
  }
  let array = response.thequestionsasked
  let numq = response.currentquestion
  if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.query.id},{"questionsAsked":array},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
		})
	}
  else
  {
    res.json(null);
  }
  if(typeof numq == typeof "hi" )
  {
		res.json({num: 13, text: boardInfo.getQuestiontext(numq)})
	}
	else
  {
		res.json({num: numq, text: boardInfo.getQuestiontext(numq)})
	}
});
router.get("/makeaguess",function(req,res){
  if(req.isAuthenticated())
  {
    let result = false
    if(req.query.name == AIArray[req.query.id].getCharacter())
    {
      result=true
    }
    else
    {
      result=false
    }
    res.json({winlose : result});
  }
  else
  {
    res.json(null)
  }
});
router.post("/delcurrentgame", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.remove({ident: req.body.ident},function(error,removed) {
			if (error)
				console.log(error);
			else
			{
				console.log(removed.result);
			}
		})
	}
})

router.post("/updatecurrentstep", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{currentStep:req.body.currentStep},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/playersubmitchar", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{ClientPlayerChoosen:req.body.num,characterchosen:req.body.characterchosen},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatecurrentlyAsking", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{currentlyAsking:req.body.currentlyAsking},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatecurrentlyguessing", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{currentlyguessing:req.body.currentlyguessing},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updateonequestioncap", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{onequestioncap:req.body.onequestioncap},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updateaiturn", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{aiturn:req.body.aiturn},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updaterespondedtoaiquestion", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{respondedtoaiquestion:req.body.respondedtoaiquestion},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})

router.post("/updatechracterarrayAlex", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.0":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayAndy", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.1":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayAshley", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.2":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayBrandon", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.3":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayChris", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.4":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayConnor", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.5":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayDaniel", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.6":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayDavid", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.7":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayEmily", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.8":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJake", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.9":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJames", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.10":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJon", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.11":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJoseph", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.12":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJoshua", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.13":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayJustin", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.14":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayKyle", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.15":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayMatt", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.16":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayMegan", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.17":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayNick", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.18":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayRachael", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.19":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarraySarah", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.20":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayTyler", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.21":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayWillian", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.22":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})
router.post("/updatechracterarrayZachary", function(req, res) {
	if (req.isAuthenticated())
	{
		Game.findOneAndUpdate({ident: req.body.ident},{"ClientBoard.23":req.body.value},function(err, game)
		{
			if(err)
			{
				console.log("There is an err")
				res.json(null);
			}
			res.json(null);
		})
	}
})

module.exports = router;
