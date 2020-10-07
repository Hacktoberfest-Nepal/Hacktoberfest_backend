const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
