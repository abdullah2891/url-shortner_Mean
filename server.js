var express = require('express');
var app = express();
var PORT = process.env.PORT||3000;
var mongoose = require('mongoose');

var dbConfig = require('./db');
//db
mongoose.connect(dbConfig.local);
//controller
var UrlController = require('./controller/url');


app.get('/new/:url*',UrlController.saveRoute);
app.get('/:id',UrlController.reRoute);

app.listen(PORT,function(){
  console.log("url-shortner app is starting at "+PORT)
})
