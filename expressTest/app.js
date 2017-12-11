/* EXPRESS SETUP */
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var express = require("express");
var app = express();
var router = express.Router();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));

var resources = ["YouTube Video", "Cool Book", "Nice Course"];

/* ROUTES */
router.get("/", function(req, res) {
  res.redirect("/index");
});

// INDEX ROUTES
router.get("/index", function(req, res) {
  res.render("index", {resources: resources});
});

// LOGIN ROUTES
router.get("/login", function(req, res) {
  res.render("login");
});

router.post("/login", function(req, res) {
  res.send("You logged in.");
});

// LOGOUT ROUTE
router.get("/logout", function(req, res) {
  res.send("You have logged out.");
});

// REGISTER ROUTE
router.get("/register", function(req, res) {
  res.render("register");
});

router.post("/register", function(req, res) {
  res.send("New user created.");
});

// RESOURCE ROUTE
router.post("/resource", function(req, res) {
  resources.push(req.body.resource);
  res.redirect("/index");
});

/* LISTEN */
app.listen(3001, function() {
  console.log("Server started...");
});
