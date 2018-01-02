
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Thought = sequelize.define("thought", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

Thought.sync();


module.exports = Thought;
