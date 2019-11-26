var mongoose = require('mongoose');
mongoose.Promise = Promise;


mongoose.connect('mongodb://heroku_gfm6zls5:1jqqig9j3td6fjv6f1aa0pun39@ds119394.mlab.com:19394/heroku_gfm6zls5');

var db = mongoose.connection;
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

db.once("open", function() 
{
  console.log("Mongoose connection successful!");
});

module.exports = db;