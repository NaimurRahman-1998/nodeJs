/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const app = express();

app
  .route("/about")
  .get((req, res) => {
    res.send("puit method");
  })
  .post((req, res) => {
    res.send("post method");
  })
  .put((req, res) => {
    res.send("put method");
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
