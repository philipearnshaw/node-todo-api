const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b7449b28b2f1fd0f09dd4c3';

// Will find many depending on query
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

// Will stop at one
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

// Find by id
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
});

// Invalid id
var invalidId = '5b7449b28b2f1fd0f09dd4c311'
Todo.findById(invalidId).then((todo) => {
  // ...
}).catch((e) => console.log(e));

if (!ObjectID.isValid(invalidId)) {
  console.log('ID not valid');
}
