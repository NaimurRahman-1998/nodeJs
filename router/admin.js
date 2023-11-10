/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const adminRouter = express.Router();

adminRouter.param("id", (req, res, next, id) => {
  req.user_id = id === "1" ? "Admin" : "Anonymous";
  next();
});

adminRouter.get("/", (req, res) => {
  res.send("admin route");
});
adminRouter.get("/login/:id", (req, res) => {
  res.send(`hello ${req.user_id}`);
});

module.exports = adminRouter;
