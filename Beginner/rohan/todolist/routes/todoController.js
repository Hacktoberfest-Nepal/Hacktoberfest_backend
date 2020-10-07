const Todo = require('../models/todo');

module.exports = (app) => {
  app.get('/todos', (req, res) => {
    Todo.find().then((todo) => res.json(todo));
  });

  app.post('/todos', (req, res) => {
    const newTodo = new Todo({
      title: req.body.title,
    });
    newTodo.save().then((todo) => res.json(todo));
  });

  app.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
      .then(() => res.json({ remove: true }))
      .catch((err) => console.log(err));
  });
};
