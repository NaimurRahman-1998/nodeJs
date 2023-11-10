/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const app = express();

app.use(express.json());
// app.use -> it enaables to use eny function in the application
// exxpress.json() ->  when client sends data through body , the data is insterted in "req". and we can access the data in "req.body" . and the data is typeof Object . and it only can parse json data

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
