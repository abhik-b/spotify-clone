require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const cors = require('cors')
const { errorHandler } = require('./middlewares/errorMiddleware');
const { connectDB } = require('./config/db');
const { options } = require("./routes/songsRoutes");

connectDB();

const app = express();
app.use(cors())

let corsOptions = {
  origin: ['http://localhost:5500/', 'http://localhost:3000/']
};


app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/songs/', require('./routes/songsRoutes'));
app.use('/api/user/', require('./routes/userRoutes'));
app.use('/api/playlists/', require('./routes/playlistRoutes'));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});