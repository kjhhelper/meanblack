
var express = require('express');
var app = express();
var path = require("path");
var root = __dirname;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
require('./server/config/mongoose.js');
// Routes go here!
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.use(express.static(path.join(root,'./client')));
app.use(express.static(path.join(root,'bower_components')));

app.listen(8000,function(){
  console.log("server running 8000");
})
