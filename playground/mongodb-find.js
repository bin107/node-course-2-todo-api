// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const todoDb = db.db('TodoApp');
    if (err) {
        return console.log('Unable to connect to MongoServer');
    }
    console.log('Connected to MongoDB server');

    // todoDb.collection('Todos').find({
    //     _id: new ObjectID('5ac8ee325daf8f27402165aa')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fucking error', err);
    // });

    // todoDb.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fucking error', err);
    //     1
    // });

    todoDb.collection('Users').find({
        name: 'dobin'
    }).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fucking error', err);
    });

    // db.close();
});