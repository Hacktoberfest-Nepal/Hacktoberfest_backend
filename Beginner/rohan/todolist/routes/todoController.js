const Todo = require('../models/todo');

module.exports = (app) => {
  app.get('/todo', (req, res) => {
    Todo.find().then((todo) => res.json(todo));
  });

  app.post('/todo', (req, res) => {
    const newTodo = new Todo({
      title: req.body.title,
    });
    newTodo.save().then((todo) => res.json(todo));
  });

  app.delete('/todo/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
      .then(() => res.json({ remove: true }))
      .catch((err) => console.log(err));
  });
};
