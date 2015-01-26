var express = require('express'),
http = require("http");

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.set('port',process.env.PORT || 3000);	
}

app.get("/",function(req,res){
res.send("hello express!");
});

http.createServer(app).listen(app.get('port'), function(){
console.log("express server listening on port " +app.get('port'));
});


