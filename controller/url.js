var mongoose = require('mongoose');
var URL = require('../model/url');
var Sentencer = require('sentencer');
var urlConfig = require('../db');

exports.saveRoute= function(req,res){
  var newUrl = URL();
  var parameter = Sentencer.make("{{adjective}}-{{noun}}");
  console.log(req.params);
  newUrl.parameter = parameter;
  newUrl.url = req.params.url+req.params["0"];
  newUrl.save(function(err,url){
    if(!err){
      res.json(url);
    }else{
      res.json(err);
    }
  })
}
exports.reRoute = function(req,res){
  URL.findOne({parameter:req.params.id},function(err,URL){
    if(!err){
      res.redirect(URL.url);
    }else{
      res.send("doesnote exist");
    }
  })
}
