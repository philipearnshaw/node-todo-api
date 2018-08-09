const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server');
  }

  var db = client.db('TodoApp');

  // Delete one document
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // Delete one document by _id
  db.collection('Todos').deleteOne({_id: new ObjectID("5b6bf3f56c98616b20a69fbc")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // Delete all documents
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // Delete all documents
  db.collection('Todos').findOneAndDelete({text: 'Eat lunch again'}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));  // result is deleted object
  });

  client.close(); // Closes the connection
});
