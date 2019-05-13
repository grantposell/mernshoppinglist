const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const MongoClient = require(‘mongodb’).MongoClient;

const app = express();

//Body parser Middleware

app.use(bodyParser.json());

// //DB config
// const db = require('./config/keys');


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://Grant:grant94@mernshopping-shard-00-00-ypddp.mongodb.net:27017,mernshopping-shard-00-01-ypddp.mongodb.net:27017,mernshopping-shard-00-02-ypddp.mongodb.net:27017/test?ssl=true&replicaSet=mernshopping-shard-0&authSource=admin&retryWrites=true";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// //Connect to Mongo
// mongoose.connect(db).then(() => console.log('Mongo Connected'))
// .catch(err => console.log(err));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


