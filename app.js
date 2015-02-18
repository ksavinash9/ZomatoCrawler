var express = require('express');

var example = require('./example');

var port = process.env.PORT || 5000;
var app = express()

app.get('/food', example.food);

app.listen(port)
