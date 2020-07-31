var express = require('express');
var router = express.Router();

let {Category} = require('../models');


/* GET questions listing. */
router.get('/', async function(req, res, next) {
    // const jane = await Dog.create({ firstName: "Jack", lastName: "Doe" });
    let categories = await Category.findAll();
    console.log(categories)
    res.json(categories);
});

router.get('/:id', async function(req, res, next) {
    console.log(req.params);
    let category = await Category.findOne({where: {id: req.params.id}});
    // console.log(categories);
    // console.log(dogs)
    res.json(category);
});


module.exports = router;
