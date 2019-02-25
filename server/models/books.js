/*
File: books.js model code
Name: Kranthi kumar Janardhanaraj
Student ID: 300976059
Web Application Name: COMP308-W2019-Midterm
*/

let mongoose = require('mongoose');

// create a model class
let booksSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', booksSchema);
