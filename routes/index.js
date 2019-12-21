var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
];

// var characters = [
//   { id: 1, ch: '的' },
//   { id: 2, ch: '一' },
//   { id: 3, ch: '了' }
// ];
var characters = require('../data/characters.json');

  var tagline = "Học từ Hán Việt";

  res.render('pages/index', {
    title: 'Học từ Hán Việt',
    drinks: drinks,
    tagline: tagline,
    characters: characters
});

  // res.render('pages/index', { title: 'Express' });
});

module.exports = router;
