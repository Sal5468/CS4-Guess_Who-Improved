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
mongoose.connect("mongodb://localhost:27017/group2DB");
setUpPassport();

//app.use('/', express.static('./'));
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
let http = require('http');

/**
 * Create HTTP server.
 */
let server = http.createServer(app);
////////////////////////////////
// Socket.io server listens to our app
let io = require('socket.io').listen(server);

// Emit welcome message on connection
io.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });

    socket.on('update', function (data) {
        // Broadcast to everyone (including self)
        io.emit('update', data);
    });
    socket.on('request', function (data) {
        // Broadcast to everyone (including self)
        io.emit('request', data);
    });

});
//info for yee server: ssh group2@www.mvhscsf.org  password: B2a7-->
//mongod --dbpath /usr/local/var/mongodb -- for nick to start mongod

server.listen(4002, function () {
  console.log('Guess who listening on port 4002!');
});
