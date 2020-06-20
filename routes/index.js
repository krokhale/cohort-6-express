var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({yay: true});
  console.log(req.query);
  res.render('index', { title: 'Express', name: 'John'});
  // res.render('something.html');
});

router.get('/john', function(req, res, next) {
  res.json({john: true});
});

module.exports = router;
