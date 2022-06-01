'use strict';
//import errorHandler from './500';
const errorHandler = require('./500');

const personHandler = (req, res) => {
  let name = req.query.name;
  if (name != null) {
    res.json({
      name: name,
    });
  } else {
    next(errorHandler);
  }
};

module.exports = personHandler;