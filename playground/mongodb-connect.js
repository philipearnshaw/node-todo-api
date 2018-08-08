//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'Andrew', age: 33};
// var {name} = user;  // creates a new var call name and sets to Andrew.
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server');
  }

  var db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Do something',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err); // Stops the function execution
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2)) // ops contains all docs that were added
  // });

  // db.collection('Users').insertOne({
  //   name: 'Phil',
  //   age: 35,
  //   location: 'Leeds'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });



  client.close(); // Closes the connection
});
