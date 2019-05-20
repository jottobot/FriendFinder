var express = require("express");
var path = require("path");

// Set up express and the port
var app = express();
var PORT = 8080;

// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("app/routing/apiRoutes")(app);
require("app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});