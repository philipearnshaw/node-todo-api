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

  // Insert a document into Todos
  db.collection('Todos').insertOne({
    text: 'Do something using default generated id',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err); // Stops the function execution
    }
    // Extract the embedded timestamp from the _id
    console.log(result.ops[0]._id.getTimestamp());
    console.log(JSON.stringify(result.ops, undefined, 2)); // ops contains all docs that were added
  });

  // Insert a document into Todos with specific id
  db.collection('Todos').insertOne({
    _id: 1234,
    text: 'Do something using specific id',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // Insert a document into Todos with manually generated id
  db.collection('Todos').insertOne({
    _id: new ObjectID(),
    text: 'Do something using manually generated id',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close(); // Closes the connection
});
