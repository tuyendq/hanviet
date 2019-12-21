var express = require('express');
var router = express.Router();
const HanziWriter = require('hanzi-writer');

/* GET home page. */
router.get('/', function(req, res, next) {
// var characters = [
//   { id: 1, ch: '的' },
//   { id: 2, ch: '一' },
//   { id: 3, ch: '了' }
// ];
  var characters = require('../data/characters.json');
  var charOfDay = characters[Math.floor(Math.random() * characters.length)];

  // var writer = HanziWriter.create('char-target-div', '我', {
  //   width: 600,
  //   height: 600,
  //   padding: 16,
  //   strokeColor: '#000000',
  //   radicalColor: '#168F16'
  // });

  res.render('pages/index', {
    title: 'Học từ Hán Việt',
    characters: characters,
    charOfDay: charOfDay
  });
});

module.exports = router;
