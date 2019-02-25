/*
File: books.js index/books.js
Name: Kranthi kumar Janardhanaraj
Student ID: 300976059
Web Application Name: COMP308-W2019-Midterm
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
