const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./routes/todoController');
const dotenv = require('dotenv').config();

app.use(express.json());

let MONGODB_URL;

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  MONGODB_URL = process.env.MONGODB_URL;
} else {
  MONGODB_URL = process.env.MONGODB_URL;
}

// PORT
const PORT = process.env.PORT || 5000;

const dbURL = MONGODB_URL;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to DB && Listening to port: ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

todoController(app);
