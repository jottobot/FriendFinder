// Requiring data from friends.js
var friends = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users visit survey page and returns friends as json
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // When user POSTS (submits) data to server 
  app.post("/api/friends", function(req, res) {
     // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newUser = req.body;
    var newUserScore = 0;
    var difference;
    for (let i = 0; i < newUser['scores'].length; i++) {
      newUserScore += newUser['scores'][i];
  }

     for (var i = 0; i < friends.length; i++) {
       var currentUser = friend[i];
       var currentUserScore = 0;
     }

  //    Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
  //  * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
  //    * Example:
  //      * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
  //      * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
  //      * Total Difference: **2 + 1 + 2 =** **_5_**
  //  * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.

  });
};