// Requiring data from friends.js
var friends = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users visit survey page and returns friends as json

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // When user POSTS (submits) data to server 

  app.post("/api/friends", function(req, res) {
     // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friendsArray.length = 0;

  //   res.json({ ok: true });
  // });
};