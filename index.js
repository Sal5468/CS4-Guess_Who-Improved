let express = require('express');
let logger = require('morgan')
let path = require("path");
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes");
var compAI = require('./AI');
var cookieParser = require("cookie-parser");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");

var setUpPassport = require("./setuppassport");
var routes = require("./routes");

var app = express();

//27017 seems to be the port number used by mongod
mongoose.connect("mongodb://localhost:27017/userdb");
setUpPassport();

app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
//app.use('/', express.static('./'));
app.use(express.static("./public"));

app.use(routes);
//app.use(logger("short"));

//req is info sending to server from client.
//res is info sending to client from server.
//info for yee server: ssh group2@www.mvhscsf.org  password: B2a7-->

app.listen(4002, function () {
  console.log('Guess who listening on port 4002!');
});
