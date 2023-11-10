/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from localhost");
});
// if in any path , it founds param, then app.param will act as a middleware .

app.param("id", (req, res, next, id) => {
  const user = {
    userid: id,
    name: "BD",
  };
  req.userDetails = user; // in this we have attatched userDetails in req object
  next(); // after middleware is complete it will go to complete the operation
});

app.get("/user/:id", (req, res) => {
  // :id is param
  res.send(req.userDetails);
  console.log(req.userDetails);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
