//bring in express
const express = require('express');
//grab the router funciton from express
const router = express.Router();

//set up a GET to pull the root '/' of the application
router.get('/', (req, res) => {
    res.render('layouts/index')
});


module.exports = router;