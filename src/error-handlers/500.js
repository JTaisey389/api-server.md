'use strict'

function errorHandling(err, req, res, next){
  res.status(500).send('something went wrong');
}

module.exports = errorHandling;