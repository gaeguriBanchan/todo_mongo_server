const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    completed: Boolean,
    uid: String,
    // objextId를 통해서 다른 Model접근
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { collection: 'todos' }
);
const Todo = mongoose.model('Todo', todoSchema);
module.exports = { Todo };
