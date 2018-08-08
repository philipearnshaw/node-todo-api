// Deconstructering
const {MongoClient, ObjectID} = require('mongodb');

// Create your own id object
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server');
  }

  var db = client.db('TodoApp');

  // Insert into Todos
  db.collection('Todos').insertOne({
    text: 'Do something',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err); // Stops the function execution
    }
    console.log(JSON.stringify(result.ops, undefined, 2)) // ops contains all docs that were added
  });

  // Insert into Users
  db.collection('Users').insertOne({
    name: 'Phil',
    age: 35,
    location: 'Leeds'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    // Extract the embedded timestamp from the _id
    console.log(result.ops[0]._id.getTimestamp());
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close(); // Closes the connection
});
