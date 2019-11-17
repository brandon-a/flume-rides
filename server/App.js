const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const SELECT_ALL_QUERY = 'SELECT * FROM users'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Flumes_Rides'
});

connection.connect(err => {
    if(err) {
        console.log('FAILED INSIDE OF CONNECT: ' + err);
    }
});

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Contro-Allow-Origin", "*");
    res.header("Access-Contro-Allow-Headers", "Origin, X-Requested_With, Content-Type, Accept");
    next();
});

require('./routes/routes')(app, connection);
app.listen(3001, () => {
    console.log(`Flumes_Rides Listening on port 3001`)
});