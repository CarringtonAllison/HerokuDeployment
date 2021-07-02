//import express from the express library that was installed via NPM 
const express = require('express');
//set app variable by calling funciton of express
const app = express();
//grab the express layouts package
const expressLayouts = require('express-ejs-layouts');

//set the view engine
app.set('view engine', 'ejs');
//set up the views and advise which directory 
app.set('views', __dirname + '/views');
// set up layout file 
app.set('layout', 'layouts/layout');
// tell express we want to use express layouts
app.use(expressLayouts);
//tell express where public files are 
app.use(express.static('public'))


// set up the Port listener
app.listen(process.env.PORT || 3000)