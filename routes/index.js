var express = require('express');
var router = express.Router();
var characters = require('../data/characters.json');
const charDefault = {id: 0, cn: "和", vi: "hòa"}
const charDefault2 = {id: 0, cn: "花", vi: "hoa"}


/* GET home page. */
router.get('/', function(req, res, next) {
// var characters = [
//   { id: 1, ch: '的' },
//   { id: 2, ch: '一' },
//   { id: 3, ch: '了' }
// ];
  // var characters = require('../data/characters.json');
  var charOfDay = characters[Math.floor(Math.random() * characters.length)];

  res.render('pages/index', {
    title: 'Học từ Hán Việt',
    // characters: characters,
    charOfDay: charOfDay
  });
});

/* GET character by id */
router.get('/:id', function(req, res, next) {
  const charId = parseInt(req.params.id)
  let charOfDay = characters.find((char) => {
    return char.id == charId
  })
  if (!charOfDay) {charOfDay = charDefault2}

  res.render('pages/index', {
    title: 'Học từ Hán Việt',
    charOfDay: charOfDay
  })
  
})

/* GET /search?q= */
router.get('/search', (req, res, next) => {
  let charOfDay = characters.find((char) => {
    return char.cn == req.query.term
  })
  // if (!charOfDay) {charOfDay = charDefault}

  res.render('pages/index', {
    title: 'Test', //req.query.term, // 'Học từ Hán Việt',
    charOfDay: charOfDay
  })

})

module.exports = router;
