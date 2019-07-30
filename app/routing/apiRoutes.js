// Requiring data from friends.js
var friends = require('../data/friends');

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users visit survey page and returns friends as json
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  // API POST Requests, when user POSTS (submits) data to server
  app.post('/api/friends', function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    var newUser = req.body;

    // parseInt for scores
    for(var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var diff = 0;
    var friendDiff = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(newUser.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < friendDiff) {
        diff = i;
        friendDiff = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(newUser);

    // send back to browser the best friend match
    res.json(friends[diff]);
  });
};