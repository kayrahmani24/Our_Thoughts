// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Thought = require("../models/thoughts.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

  
    Thought.findAll({}).then(function(results) {

      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Thought Data:");
    console.log(req.body);

    Thought.create

    ({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at   
    }).
    
    then(function(results) {
  
      res.end();
    });

  });

};