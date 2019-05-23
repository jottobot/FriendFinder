// Requiring data from friends.js
var friends = require('../data/friends');

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users visit survey page and returns friends as json
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // API POST Requests, when user POSTS (submits) data to server
  app.post('/api/friends', function (req, res) {

    var newUser = req.body;
    var diff = 0;
    var scoreToBeat = 50;
    for (var i = 0; i < friends.length; i++) {
      // scores of a friend in the database
      var friendScores = friends[i].scores;
      // scores of the new friend that just submitted the survey
      var newFriendScores = newUser.scores;
      for (var j = 0; j < friendScores.length; j++) {
        if (friendScores[j] > newFriendScores[j]) {
          diff += friendScores[j] - newFriendScores[j];
        } else {
          diff += newFriendScores[j] - friendScores[j];
        }
        if (diff < scoreToBeat) {
          scoreToBeat = diff;
          match = friends[i];
        }
      }
    }

    friends.push(newUser);
    res.json(match);

  });
};