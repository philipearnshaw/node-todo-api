const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB Server');
  }

  var db = client.db('TodoApp');

  // Find all documents
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos (all)');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find collection', err);
  });

  // Find uncompleted todos
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos (not completed)');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find collection', err);
  });

  // Find by id
  db.collection('Todos').find({_id: new ObjectID('5b6aaa2e6c98616b20a69a69')}).toArray().then((docs) => {
    console.log('Todos (by id 5b6aaa2e6c98616b20a69a69)');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find collection', err);
  });

  // Count all documents
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos (count): ${count}`);
  }, (err) => {
    console.log('Unable to find collection', err);
  });





  db.collection('Users').find({name: 'Fred'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find collection', err);
  });









  client.close(); // Closes the connection
});
