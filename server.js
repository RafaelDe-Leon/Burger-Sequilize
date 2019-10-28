var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

// App is listening
app.listen(PORT, function() {

    console.log("App now listening at localhost: " + PORT);
});