var express = require('express');
var router = express.Router();

let {Dog} = require('../models');

// GET /dogs
// GET /dogs/1
// POST /dogs
// PUT /dogs/1
// DELETE /dogs/1

// POSTMAN

/* GET users listing. */
router.get('/', async function(req, res, next) {
    // const jane = await Dog.create({ firstName: "Jack", lastName: "Doe" });
    let dogs = await Dog.findAll();
    console.log(dogs)
    res.json(dogs);
});

router.get('/:id', async function(req, res, next) {
    console.log(req.params);
    let dog = await Dog.findOne({where: {id: req.params.id}});
    console.log(dog);
    // console.log(dogs)
    res.json(dog);
});

router.post('/', async function(req, res, next) {
    console.log(req.body);
    const dog = await Dog.create(req.body);
    res.json(dog);
});

router.put('/:id', async function(req, res, next) {
    console.log(req.body);
    let dog = await Dog.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json(dog);
});

router.delete('/:id', async function(req, res, next) {
    // console.log(req.body);
    const result = await Dog.destroy({where: {id: req.params.id}});
    res.json(result);
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
