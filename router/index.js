/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const adminRouter = require("./admin");
const publicRouter = require("./public");

const app = express();

app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
