// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const todoDb = db.db('TodoApp');
    if (err) {
        return console.log('Unable to connect to MongoServer');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // todoDb.collection('Todos').deleteMany({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // todoDb.collection('Todos').deleteOne({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneandDelete
    todoDb.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });

    // db.close();
});