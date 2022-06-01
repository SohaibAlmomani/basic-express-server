'use strict';
function getAgent(req, res, next) {
  req.myName = 'Sohaib';
  req.browser = req.headers['user-agent'];
  next();
}
module.exports = getAgent;