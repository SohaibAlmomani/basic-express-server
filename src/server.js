"use strict";
const express = require("express");
const stamper = require("../middlewares/stamper");
const notFoundHandler = require("../handlers/404");
const errorHandler = require("../handlers/500");


const validator = require('../middlewares/validator');
const logger = require('../middlewares/logger');
const getAgent = require('../middlewares/getAgent');
const square = require('../middlewares/square');
const person = require('../handlers/person');


const app = express();
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("welcome Home Page");
});

app.get("/data", (req, res) => {
  res.json({
    id: 1,
    name: "Sohaib Almomani",
    email: "sohaibalmomani95@gmail.com",
  });
});
app.get("/test", stamper, (req, res) => {
  res.json({
    id: 2,
    name: "test",
    email: "test@gmail.com",
    time: req.timeStamp,
  });
});
app.get('/test2', getAgent, (req, res) => {
  res.json({
    message: 'test 2 route',
    name: req.myName,
    browser: req.browser,
  });
});
app.get("/bad", (req, res) => {
  let num = 10;
  let result = num.forEach((x) => {
    console.log(x);
  });
  res.status(500).send(result);
});
app.get('/number/:id', square(), (req, res) => {
  res.status(200).send(`the result is ${req.number}`);
});
app.get('/person', validator, person);

app.use("*", notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`I'm listening on port${port}`);
  });
}
module.exports = {
  app: app,
  start: start,
};
