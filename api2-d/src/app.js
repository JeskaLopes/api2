const express = require('express');
//building the first route
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
});

//instance on conection, error...
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});
db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});
db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;