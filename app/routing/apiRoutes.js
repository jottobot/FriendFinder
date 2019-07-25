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
    var diff = 0;
    var bestFriend = {
      name: '',
      photo: '',
      friendDiff: 45
    };
    var newUser = req.body;
    var userScores = newUser.scores;
    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    newUser = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };
    var sum = b.reduce((a, b) => a + b, 0);
    for (var i = 0; i < friends.length; i++) {
      diff = 0;
      var bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      diff += Math.abs(sum - bestFriendScore);
      if (diff <= bestFriend.friendDiff) {
        bestFriend.name = friends[i].name;
        bestFriend.photo = friends[i].photo;
        bestFriend.friendDiff = diff;
      }
      friends.push(newUser);
      res.json(bestFriend);
    }
  });
};