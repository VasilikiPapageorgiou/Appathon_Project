//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'test'

MongoClient.connect(connectionURL, { useNewParser: true }, (error, client) => { 
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'ChristiMaria',
        age: 21
    })
    console.log('hiiii')

})