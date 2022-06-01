'use strict';

function square() {
  return (req, res, next) => {
    console.log('req.params.id => ', req.params.id);
    let id = parseInt(req.params.id);
    console.log(typeof id);
    req.number = id * id;
    next();
  };
}
module.exports = square;