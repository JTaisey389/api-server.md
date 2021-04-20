'use strict'; //JavaScript strict mode. A standardization of JavaScript

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js')
const errors = require('./error-handlers/500.js')
const logger = require('./middleware/logger.js');

// global middleware for handling the parsing of req.body
// handing the parsing of req.body
app.use(express.json());

app.use(logger);

app.get('/hello', (req, res) => {
  console.log(req.query);
  res.send('hello world!');
})

app.get('/hello/:person', (req, res) => {
  console.log('name:',req.params.person);
  res.send({ name: req.params.person});
})

app.get('/hello/:person/:another', (req, res) => {
  console.log('params', rew.params);
  res.send(req.params);
})

app.get('/cool', square(10), (req, res) => {
  console.log(req.squared);
})

// This function square is being hoisted to the app.get('/cool)
// This is also function currying
function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number'){
      next('not a number!');
    } else {
      req.squared = n * n;
      next();
    }
  }
}

// catch all route handles that are not found
app.use('*', notFound);
// handles generic server errors
app.use(errors);

//module.exports is a global object in nodejs
// it allows us to add things to it, so that we can use these things in another file and we add stuff as an object or a method
module.exports = {
  server: app,
  start: port => { //Passing only one argument with Port
    app.listen(port, () => {
  console.log(`server is up: ${port}`);
    });
  }
}