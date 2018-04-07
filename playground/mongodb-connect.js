// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const todoDb = db.db('TodoApp');
    // if (err) {
    //     return console.log('Unable to connect to MongoServer');
    // }
    // console.log('Connected to MongoDB server');

    // todoDb.collection('Todos').insertOne(({
    //     text: "Some text",
    //     compelted: false
    // }), (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert Todo', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // })

    // todoDb.collection('Users').insertOne(({
    //     name: 'dobin',
    //     location: 'Guada Biejo',
    //     age: '25'
    // }), (err, result) => {
    //     if (err)
    //         return console.log('Fucking error',err);

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});