const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

Todo.remove({}).then((result) => {
  console.log(result);  // result object i.e. {result: {ok: 1, n: 3}...
});

Todo.findOneAndRemove({_id: '5b7ac7141c26953d0268e669'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b7ac7151c26953d0268e66a').then((todo) => {
  console.log(todo);
});
