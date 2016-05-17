var mongoose = require('mongoose');


module.exports = mongoose.model('URL',{
  parameter :{
    type:String,
    unique:true
  },
  url:String
});
