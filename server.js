const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("App listening to port 5000");
});
