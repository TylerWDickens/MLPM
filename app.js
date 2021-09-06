const { urlencoded } = require("express");
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const engine = require("ejs-mate");

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/manufacturing", (req, res) => {
  res.render("manufacturing");
});

app.get("/equipment-and-parts-distribution", (req, res) => {
  res.render("equipment");
});

app.get("/millwrighting-and-machinery-moving", (req, res) => {
  res.render("millwrighting");
});
app.get("/careers", (req, res) => {
  res.render("careers");
});

app.get("/:id", (req, res) => {
  const { id } = req.body;
  res.render(`/${id}`);
});

app.listen(3000, () => {
  console.log("ON PORT 3000");
});
