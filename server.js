var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.listen(port, function() {
   console.log("Listening on port " + port); 
});