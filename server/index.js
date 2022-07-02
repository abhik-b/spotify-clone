require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/songs/', require('./routes/songsRoutes'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});