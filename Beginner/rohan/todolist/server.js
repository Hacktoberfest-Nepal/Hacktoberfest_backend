const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./routes/todoController');
const dotenv = require('dotenv').config();

app.use(express.json());

let MONGODB_PASSWORD, MONGODB_NAME;

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
  MONGODB_NAME = process.env.MONGODB_NAME;
} else {
  MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
  MONGODB_NAME = process.env.MONGODB_NAME;
}

// PORT
const PORT = process.env.PORT || 5000;

const dbURL = `mongodb+srv://rohan:${MONGODB_PASSWORD}@rohan.zcxu1.mongodb.net/${MONGODB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to DB && Listening to port: ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

todoController(app);
