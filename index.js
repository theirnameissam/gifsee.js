var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'src'))); 
app.listen(8080);
console.log('Sever running on: http://localhost:8080');