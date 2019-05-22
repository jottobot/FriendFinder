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
    // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newUser = req.body;

    // var bestMatch = {
    //   name: '',
    //   photo: '',
    //   friendDifference: Infinity
    // };

    var diff = 0;
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
      }
      // if (diff <= bestMatch.friendDifference) {
      //   // Reset the bestMatch to be the new friend.
      //   bestMatch.name = newUser.name;
      //   bestMatch.photo = newUser.photo;
      //   bestMatch.friendDifference = diff;
      // }
    }
    // Add the newUser object to the friends data table (array)
    friends.push(newUser);
    res.json();

    // Return the closest match
    
  });
};