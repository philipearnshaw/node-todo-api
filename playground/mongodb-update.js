const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server');
  }

  var db = client.db('TodoApp');

  // Update the complete to true
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b67fe2f8ab43158e3e3386b')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  });

  // Update the name and increment the age by one.
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b684a1f5ae92d6da62f9773')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Franko'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  });

  client.close(); // Closes the connection
});
