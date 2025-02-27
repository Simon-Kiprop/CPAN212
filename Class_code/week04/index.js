//import express from "express"; // if you are using type: module
const express = require("express"); // if using common JS (Default)
 
const app = express();
const PORT = process.env.PORT || 8000;
 


const logger = (req, res)
// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});