var express = require('express');
var router = express.Router();

let {Question} = require('../models');


/* GET questions listing. */
router.get('/', async function(req, res, next) {
    // const jane = await Dog.create({ firstName: "Jack", lastName: "Doe" });
    let questions = await Question.findAll();
    console.log(questions)
    res.json(questions);
});

router.get('/:id', async function(req, res, next) {
    console.log(req.params);
    let question = await Question.findOne({where: {id: req.params.id}});
    console.log(question);
    // console.log(dogs)
    res.json(question);
});


module.exports = router;
