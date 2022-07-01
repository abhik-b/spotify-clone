require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});


app.listen(port, () => {  
  console.log(`Server is running on port ${port}`);
});