let express = require('express');
let logger = require('morgan')
let path = require("path");
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes");
var compAI = require('./AI');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', express.static('./'));
app.use(express.static("./public"));

app.use(routes);
app.use(logger("short"));

//req is info sending to server from client.
//res is info sending to client from server.
//info for yee server: ssh group2@www.mvhscsf.org  password: B2a7-->

app.listen(4002, function () {
  console.log('Guess who listening on port 4002!');
});
