/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from localhost");
});

app.post("/", (req, res) => {
  res.send({
    message: "you have requested for post method",
  });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
