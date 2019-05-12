const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const MongoClient = require(‘mongodb’).MongoClient;

const app = express();

//Body parser Middleware

app.use(bodyParser.json());

//DB config
const db = require('./config/keys').uri;

//Connect to Mongo
mongoose.connect(db).then(() => console.log('Mongo Connected'))
.catch(err => console.log(err));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


