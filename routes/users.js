var express = require('express');
var router = express.Router();
var bcrypt  = require('bcrypt');
let myHash = bcrypt.hashSync("mysecretpassword", bcrypt.genSaltSync(8), null);
console.log(myHash);
console.log(bcrypt.compareSync('mysecretpasswordajhs', myHash))

let {AppUser} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/accounts/:userId', function(req, res, next) {
  console.log(req.params);
  console.log(req.params.userId)
  // console.log(req.query);
  // console.log(req.body);
  // make some Database calls and fetch the information from the database for the userId = req.params.userId
  // and manipulate the information (JSON) in whatever way you like
  // and once you are done with the data manipulation/updating the database or whatever

  res.send('respond with a resource something');
});

// /users/accounts
router.post('/profile', function(req, res, next) {
  console.log(req.body);
  setTimeout(() => {
    res.send('respond with a resource something');
  }, 5000)

})


router.post('/login', function(req, res, next) {
  console.log(req.body.password);
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  // console.log(req.body);
  res.send('respond with a resource');
});

// fetch('htttp://localhost:3006/users/signup', {method: 'POST', body: JSON.stringify({email: 'akjshd', password: 'alksjd'})})
//     .then(function(response){
//       if(response.user){
//         show success and
//         take the user to the /login page in the react app
//       } else {
//         show error to the user
//       }
//     })

router.post('/signup', async function(req, res, next) {
  console.log(req.body);
  let hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  let user = await AppUser.create({email: req.body.email, hashPassword: hash});
  // res.send('respond with a resource');
  // res.json(user)
  res.redirect('http://localhost:3000/login');
  // res.json({user: user})
})
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   User.create({email: req.body.email, hashPassword: req.body.password});
//   res.send('respond with a resource');
// });

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
