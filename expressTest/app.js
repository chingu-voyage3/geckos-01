/* EXPRESS SETUP */
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));

var resources = ["YouTube Video", "Cool Book", "Nice Course"];

/* ROUTES */
app.get("/", function(req, res) {
  res.redirect("/index");
});

// INDEX ROUTES
app.get("/index", function(req, res) {
  res.render("index", {resources: resources});
});

// LOGIN ROUTES
app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/login", function(req, res) {
  res.send("You logged in.");
});

// LOGOUT ROUTE
app.get("/logout", function(req, res) {
  res.send("You have logged out.");
});

// REGISTER ROUTE
app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", function(req, res) {
  res.send("New user created.");
});

// RESOURCE ROUTE
app.post("/resource", function(req, res) {
  resources.push(req.body.resource);
  res.redirect("/index");
});

/* LISTEN */
app.listen(3000, function() {
  console.log("Server started...");
});
