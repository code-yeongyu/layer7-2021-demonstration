const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require("body-parser");

var morgan = require('morgan');

app.use(morgan('combined'))

app.use(express.static(__dirname + '/'));

app.use('/',
  function (req, res, next) {
    res.sendFile(__dirname +  '/index.html');
  }
);

app.all('*',
  function (req, res, next) {
    res.status(404).send('<h1> 404 Error </h1>');
  }
);


http.listen(80,function(){
  console.log('server on!');
});

module.exports = app;
