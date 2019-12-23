var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// var characters = [
//   { id: 1, ch: '的' },
//   { id: 2, ch: '一' },
//   { id: 3, ch: '了' }
// ];
  var characters = require('../data/characters.json');
  var charOfDay = characters[Math.floor(Math.random() * characters.length)];

  res.render('pages/index', {
    title: 'Học từ Hán Việt',
    characters: characters,
    charOfDay: charOfDay
  });
});

module.exports = router;
