const express = require("express");
require("dotenv").config();
const app = express();

app.get("/test", (req, res) => {
  return res.json({
    msg: "Eelalala Aae u",
  });
});

app.get("/home", (req, res) => {
  return res.json({
    msg: "HOME COMMING",
  });
});

app.get("/info", (req, res) => {
  return res.json({
    msg: "INFO ROUTE",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
