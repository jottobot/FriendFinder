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

    var diff = 0;
    var bestFriend = {
      name: "",
      photo: "",
      friendDiff: 100,
    }

    var newUser = req.body;
    var userName = newUser.name;
    var userScores = newUser.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10)
    });
    newUser = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName + " and score: " + userScores);

    var sum = best.reduce((a, b) => a + b, 0);
    console.log("Sum of users score is " + sum);
    console.log("Best friend match difference is " + bestFriend.friendDiff);

    for (var i = 0; i < friends.length; i++) {
      diff = 0;
      console.log(friends[i].name);
      console.log("Total diff is " + diff);
      console.log("Best friend match difference is " + bestFriend.friendDiff);

      var bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score is " + bestFriendScore);
      diff += Math.abs(sum - bestFriendScore);
      console.log(diff);

      if (diff <= bestFriend.friendDiff) {
        bestFriend.name = friends[i].name;
        bestFriend.photo = friends[i].photo;
        bestFriend.friendDiff = diff;
      }

      console.log(newUser);
      console.log(bestFriend);


      friends.push(newUser);
      res.json(bestFriend);

    }

  });
};