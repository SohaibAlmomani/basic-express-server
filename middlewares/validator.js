'use strict';

const errorHandler = require('../handlers/500');

module.exports = (req, res, next) => {
  let regex = /[a-zA-Z]/gi;
  if (regex.test(req.query.name)) {
    next();
  } else {
    console.log(regex.test(req.query.name));
    next(errorHandler);
  }
};