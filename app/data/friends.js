// DATA
// Below data will hold all of the friends.

var friends = [
  {
    name: "Sarah",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/73/140214_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%ED%83%80%EA%B0%80%EC%88%98_%28GP_BASIC%29_%283%29.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Beth",
    photo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Smart_Beach_Tour_2015_-_Sara_Niedrig.jpg",
    scores: [
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Michael",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mihail_Bagas_and_Cat_2019.jpg",
    scores: [
      5,
      3,
      3,
      1,
      3,
      3,
      3,
      5,
      4,
      1
    ]
  },
  {
    name: "Steve",
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Sahil505.jpg",
    scores: [
      2,
      1,
      2,
      2,
      1,
      2,
      2,
      2,
      2,
      1
    ]
  },
  {
    name: "Lucy",
    photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Canoeing_on_Emerald_Lake.jpg",
    scores: [
      5,
      5,
      5,
      5,
      5,
      1,
      5,
      5,
      5,
      5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;