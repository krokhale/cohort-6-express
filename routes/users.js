var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:id/name/:name', function(req, res, next) {
  // console.log(req.params);
  // look up the database for user id = 3
  // look up the profile of user
  // manipulations

  res.send('respond with a resource');
});

router.get('/something', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
