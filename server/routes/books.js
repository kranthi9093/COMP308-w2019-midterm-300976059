/*
File: books.js routes/books.js
Name: Kranthi kumar Janardhanaraj
Student ID: 300976059
Web Application Name: COMP308-W2019-Midterm
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    res.render('books/details', {
      title: 'Add Books Details'
    });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  let newBook = book({
    "Title": req.body.Title,
    "Price": req.body.Price,
    "Author": req.body.Author,
    "Genre": req.body.Genre
});

book.create(newBook, (err, contactModel) => {
    if(err) {
        console.log(err);
        res.end(err);
    }
    else {
        // refresh the contact list
        res.redirect('/books');
    }
});
    
   
});

// GET the Book Details page to edit an existing Book
router.get('/:id', (req, res, next) => {

    let id = req.params.id;

    book.findById(id, (err, bookObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view 
            res.render('books/details', {
                title: 'Edit Books Details',
                books: bookObject
            });
        }
    });
});

// POST - process the information  from the book details  and update
router.post('/:id', (req, res, next) => {

    let id = req.params.id;

    let updatedBook = book({
        "_id": id,
        "Title": req.body.Title,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });

    book.update({_id: id}, updatedBook, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/books');
        }
    })

});

// GET -  delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  book.remove({_id: id}, (err) => {
      if(err) {
          console.log(err);
          res.end(err);
      }
      else {
          // refresh the contact list
          res.redirect('/books');
      }
  });
});


module.exports = router;