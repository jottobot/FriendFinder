var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express and the port
var app = express();
var PORT = process.env.PORT || 8080;

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});