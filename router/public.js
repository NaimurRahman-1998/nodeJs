/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const publicRouter = express.Router();

const log = (req, res, next) => {
  // a middleware function
  console.log("logging here");
  next();
};

publicRouter.all("*", log);

publicRouter.get("/", (req, res) => {
  res.send("main route   asd");
});

module.exports = publicRouter;
